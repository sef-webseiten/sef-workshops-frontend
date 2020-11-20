import firebase from "firebase/app";
import "firebase/auth";
import "firebase/functions"
import {firebaseConfig} from "./firebase-api";
import * as firebaseui from "firebaseui";

export const app = firebase.initializeApp(firebaseConfig);

const emulator = location.host.match(/localhost:\d*/g);

export const uiConfig = {
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

if(!emulator)
    uiConfig.signInSuccessUrl = '/';

export const auth = app.auth();

if (emulator) {
    auth.useEmulator("http://localhost:9099/")
    auth.signInWithEmailAndPassword("eric@gmail.com", "123456").then(console.log).catch(console.log)
}

// Initialize the FirebaseUI Widget using Firebase.
export const ui = new firebaseui.auth.AuthUI(auth);

export const functions = app.functions("europe-west3");

if(emulator)
    functions.useFunctionsEmulator("http://localhost:5001");