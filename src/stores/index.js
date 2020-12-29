import { ordersStore } from "./orders";
import { authenticationStore } from "./authentification";

export const store = {
    state: {
        initialized: false
    },
    mutations: {
        setInitialized(state, initialized) {
            state.initialized = initialized;
        }
    },
    modules: {
        orders: ordersStore,
        authentication: authenticationStore
    }
}