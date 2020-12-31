import { GraphQLClient } from "graphql-request";
import gql from "graphql-tag";

export let client = new GraphQLClient(process.env.GRIDSOME_BACKEND_URL);

export function refreshToken(token) {
    client.setHeader("Authorization", `Bearer ${token}`)
}

export async function updateUserData(user) {
    await client.request(gql`
        mutation ($firstName: String, $lastName: String, $occupation: String, $birthday: Date, $organizer: Boolean) {
            updateUserData (
                user: {
                    firstName: $firstName
                    lastName: $lastName
                    occupation: $occupation
                    birthday: $birthday
                    organizer: $organizer
                }
            ) { firstName }
        }
    `, user);
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
            }
            orders: myOrders {
                _id
                status
                price
                workshop {
                    _id
                    title
                    thumbnail
                }
                event {
                    dates {
                        startTime
                        endTime
                    }
                    privateLocation
                }
                timestamp
            }

        }
    `);

    store.commit("setOrders", orders);
    store.commit("setUserDetails", me);
}