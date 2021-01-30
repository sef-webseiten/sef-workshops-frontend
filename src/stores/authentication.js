import { loadInitialData, refreshToken } from "../plugins/graphql/graphql-client";

export const authenticationStore = {
    state: {
        firebaseUser: null,
        user: null,
        accessToken: null
    },
    mutations: {
        setFirebaseUser: (state, user) => state.firebaseUser = user,
        setUserDetails: (state, user) => state.user = user,
        setAccessToken: (state, token) => state.accessToken = token,
    },
    actions: {
        subscribeUserChanges(store, shouldRedirect) {
            import("../plugins/firebase/firebase-client").then(({ auth }) => {
                auth.onAuthStateChanged(async user => {
                    store.commit("setFirebaseUser", user);
                    store.commit("setInitialized", !user);

                    if (!user) {
                        if (shouldRedirect)
                            store.rootState.router.push("/");
                        return;
                    }

                    let token = await user.getIdToken();

                    refreshToken(token);
                    loadInitialData(store).then(() => store.commit("setInitialized", true));
                });
            });
        }
    }
};

export function updateUserDetails(user) {
    this.$store.commit("setUserDetails", { ...this.$store.state.authentication.user, ...user })
}

export const authenticationStoreComputers = {
    firebaseUser() {
        return this.$store.state.authentication.firebaseUser;
    },
    user: {
        get() {
            return this.$store.state.authentication.user;
        },
        set: updateUserDetails
    },
    username() {
        const s = this.$store.state.authentication;
        return s.firebaseUser ? (s.user ? s.user.firstName : s.firebaseUser.displayName) : null;
    }
}