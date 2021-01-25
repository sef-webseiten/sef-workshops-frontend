import { ordersStore } from "./orders";
import { authenticationStore } from "./authentication";
import { searchStore } from "./serach";

export const store = {
    state: {
        initialized: true,
        router: null
    },
    mutations: {
        setInitialized: (state, initialized) => state.initialized = initialized,
        setRouter: (state, router) => state.router = router
    },
    modules: {
        orders: ordersStore,
        authentication: authenticationStore,
        search: searchStore
    }
}