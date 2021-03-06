import firebase from "firebase/app";
import * as firebaseui from "firebaseui";
import { auth } from "./firebase-client";

export const uiConfig = {
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    signInFlow: 'popup',
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        if(authResult.additionalUserInfo.isNewUser)
            plausible('register');
        return false;
    }
};

export const ui = new firebaseui.auth.AuthUI(auth);