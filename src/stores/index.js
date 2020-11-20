import {auth} from "../firebase-client";
import { refreshToken } from "../graphql-client";

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
            auth.onAuthStateChanged(async user => {
                store.commit("setUser", user);

                let token = await user.getIdToken();
                refreshToken(token);
            })
        }
    }
};