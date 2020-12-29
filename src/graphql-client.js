import { GraphQLClient } from "graphql-request";
import gql from "graphql-tag";

export let client = new GraphQLClient(process.env.GRIDSOME_BACKEND_URL);

export function refreshToken(token) {
    client.setHeader("Authorization", `Bearer ${token}`)
}

export async function loadUserDetails() {
    const { me } = await client.request(gql`
        query {
            me {
                firstName
                lastName
                organizer
                profilePicture

            }
        }
    `);
    return me;
}

export async function loadOrders() {
    const { orders } = await client.request(gql`
        query {
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
    return orders;
}