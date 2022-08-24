// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA8fVWRJJoALCivEI8KQvEoaqE2BYt5Zac",
    authDomain: "ecom-website-64b97.firebaseapp.com",
    projectId: "ecom-website-64b97",
    storageBucket: "ecom-website-64b97.appspot.com",
    messagingSenderId: "174650092779",
    appId: "1:174650092779:web:7d278e34c6f53f76f9a2ae",
    measurementId: "G-X31KHN12FR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);