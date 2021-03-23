import { GraphQLClient } from "graphql-request";
import gql from "graphql-tag";
import { mapWorkshops } from "../../../static-generation/workshops/map";
import { workshopsQuery } from "../../../static-generation/workshops/load";

export let client = new GraphQLClient(process.env.GRIDSOME_BACKEND_URL);

export function refreshToken(token) {
    client.setHeader("Authorization", `Bearer ${token}`)
}

export async function updateUserData(user, store) {
    const {updateUserData: newUser} = await client.request(gql`
        mutation ($firstName: String, $lastName: String, $occupation: String, $birthday: Date, $organizer: Boolean) {
            updateUserData (
                user: {
                    firstName: $firstName
                    lastName: $lastName
                    occupation: $occupation
                    birthday: $birthday
                    organizer: $organizer
                }
            ) { _id
                firstName
                lastName
                organizer
                occupation
                birthday
                profilePicture }
        }
    `, user);

    store.commit("setUserDetails", newUser);
}

export async function loadWorkshops(store) {
    const { allWorkshops: workshops } = await client.request(workshopsQuery);

    store.commit("setWorkshops", mapWorkshops(workshops));
}

export async function loadInitialData(store) {
    const { me, orders } = await client.request(gql`
        query {
            me {
                _id
                firstName
                lastName
                organizer
                occupation
                birthday
                profilePicture
                email
            }
            orders: myOrders {
                _id
                status
                price
                participants
                workshop {
                    _id
                    organizer {
                        firstName
                        lastName
                        email
                        contact {
                            whatsapp
                            messenger
                        }
                    }
                    title
                    thumbnail
                }
                event {
                    _id
                    dates {
                        startTime
                        endTime
                    }
                    publicLocation
                    privateLocation
                }
                timestamp
            }

        }
    `);

    store.commit("setOrders", orders);
    store.commit("setUserDetails", me);
}