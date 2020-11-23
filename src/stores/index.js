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
            import("../firebase-client").then(({ auth }) => {
                auth.onAuthStateChanged(async user => {
                    store.commit("setUser", user);

                    if (!user)
                        return;

                    let token = await user.getIdToken();
                    refreshToken(token);
                });
            });

        }
    }
}