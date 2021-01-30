import { ordersStore } from "./orders";
import { authenticationStore } from "./authentication";
import { searchStore } from "./serach";
import { workshopsStore } from "./workshops";
import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export const store = new Vuex.Store({
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
        search: searchStore,
        workshops: workshopsStore
    }
});