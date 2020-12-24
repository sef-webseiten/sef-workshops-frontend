import { refreshToken } from "../graphql-client";
import { ordersStore } from "./orders";
import { authenticationStore } from "./authentification";

export const store = {
    modules: {
        orders: ordersStore,
        authentication: authenticationStore
    }
}