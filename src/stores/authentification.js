import { loadUserDetails, refreshToken } from "../graphql-client";

export const authenticationStore = {
    state: {
        firebaseUser: null,
        user: null,
        accessToken: null
    },
    mutations: {
        setFirebaseUser: (state, user) => state.firebaseUser = user,
        setUserDetails: (state, user) => state.user = user,
        setAccessToken: (state, token) => state.accessToken = token
    },
    actions: {
        subscribeUserChanges(store) {
            import("../firebase-client").then(({ auth }) => {
                auth.onAuthStateChanged(async user => {
                    store.commit("setFirebaseUser", user);

                    if (!user)
                        return;

                    let token = await user.getIdToken();
                    refreshToken(token);
                    store.dispatch("loadBackendData")
                });
            });
        },
        loadBackendData(store) {
            loadUserDetails().then(me => {
                store.commit("setUserDetails", me)
            });
        }
    }
};

export const authenticationStoreComputers = {
    firebaseUser() {
        return this.$store.state.authentication.firebaseUser;
    },
    user: {
        get() {
            return this.$store.state.authentication.user;
        },
        set(user) {
            this.$store.commit("setUserDetails", { ...this.$store.state.authentication.user, ...user })
        }
    },
    username() {
        const s = this.$store.state.authentication;
        return s.firebaseUser ? (s.user ? s.user.firstName : s.firebaseUser.displayName) : null;
    }
}