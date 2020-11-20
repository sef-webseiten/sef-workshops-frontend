import { GraphQLClient } from "graphql-request";

export let client = new GraphQLClient(process.env.GRIDSOME_BACKEND_URL);

export function refreshToken(token) {
    client.setHeader("Authorization", `Bearer ${token}`)
}