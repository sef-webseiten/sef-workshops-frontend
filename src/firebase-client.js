import firebase from "firebase/app";
import "firebase/auth";
// import "firebase/functions"
import {firebaseConfig} from "./firebase-api";

export const app = firebase.initializeApp(firebaseConfig);

export const emulator = process.isClient && location.host.match(/localhost:\d*/g) && false;

export const auth = app.auth();

if (process.isClient)
    auth.setPersistence(firebase.auth.Auth.Persistence.SESSION);

if (emulator) {
    auth.useEmulator("http://localhost:9099/")
    auth.signInWithEmailAndPassword("eric@gmail.com", "123456").then(console.log).catch(console.error)
}

// export const functions = app.functions("europe-west3");
//
// if(emulator)
//     functions.useFunctionsEmulator("http://localhost:5001");