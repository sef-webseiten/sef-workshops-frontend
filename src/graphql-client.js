import { GraphQLClient } from "graphql-request";
import gql from "graphql-tag";

export let client = new GraphQLClient(process.env.GRIDSOME_BACKEND_URL);

export function refreshToken(token) {
    client.setHeader("Authorization", `Bearer ${token}`)
}

export async function loadInitialData(store) {
    const { me, orders } = await client.request(gql`
        query {
            me {
                firstName
                lastName
                organizer
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