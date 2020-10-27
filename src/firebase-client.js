import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import {firebaseConfig} from "./firebase-api";
import * as firebaseui from "firebaseui";

export const app = firebase.initializeApp(firebaseConfig);

export const firestore = app.firestore();

export const uiConfig = {
    signInSuccessUrl: '/',
    signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
    ],
    // tosUrl and privacyPolicyUrl accept either url string or a callback
    // function.
    // Terms of service url/callback.
    tosUrl: '/tos',
    // Privacy policy url/callback.
    privacyPolicyUrl: function() {
        window.location.assign('/privacy');
    }
};

export const auth = app.auth();

// Initialize the FirebaseUI Widget using Firebase.
export const ui = new firebaseui.auth.AuthUI(auth);