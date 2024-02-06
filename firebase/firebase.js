// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNusPxjOttUrzOC0BN3a_IigjGK7tB6MY",
  authDomain: "fir-todo-app-5a15b.firebaseapp.com",
  projectId: "fir-todo-app-5a15b",
  storageBucket: "fir-todo-app-5a15b.appspot.com",
  messagingSenderId: "72081345037",
  appId: "1:72081345037:web:7a6c59342b2d98c034e344",
  measurementId: "G-05G074TC25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db = getFirestore(app);