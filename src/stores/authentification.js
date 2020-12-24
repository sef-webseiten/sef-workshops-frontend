import { refreshToken } from "../graphql-client";

export const authenticationStore = {
    state: {
        currentUser: null,
        accessToken: null
    },
    mutations: {
        setUser: (state, user) => state.currentUser = user,
        setAccessToken: (state, token) => state.accessToken = token
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
                    store.dispatch("loadBackendData")
                });
            });
        }
    }
}