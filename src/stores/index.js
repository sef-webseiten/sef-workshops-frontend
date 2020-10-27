import {auth} from "../firebase-client";

export const store = {
    state: {
        currentUser: null
    },
    mutations: {
        setUser(state, user) {
            state.currentUser = user;
        }
    },
    actions: {
        subscribeUserChanges(store) {
            auth.onAuthStateChanged(user => store.commit("setUser", user))
        }
    }
};