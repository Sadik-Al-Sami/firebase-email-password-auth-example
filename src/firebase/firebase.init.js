// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBn4qWe3I-yb3u2L0pHYQ4M2gxX6rxu2xc",
    authDomain: "email-password-auth-e840d.firebaseapp.com",
    projectId: "email-password-auth-e840d",
    storageBucket: "email-password-auth-e840d.appspot.com",
    messagingSenderId: "315117102439",
    appId: "1:315117102439:web:b0cfe1acb07f86c2c33bc2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;