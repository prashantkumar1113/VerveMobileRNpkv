import * as firebase from "firebase/app";
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA9YR80ctUy545uwnppLDNwoZHbi17ozEg",
    authDomain: "vervewareauthv2.firebaseapp.com",
    projectId: "vervewareauthv2",
    storageBucket: "vervewareauthv2.appspot.com",
    messagingSenderId: "495124910175",
    appId: "1:495124910175:web:5fecd561a866b4348e8bea",
    measurementId: "G-7X5CD5KYHS",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
