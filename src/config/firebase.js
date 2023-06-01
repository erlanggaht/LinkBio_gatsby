// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";  
import { getAuth,GithubAuthProvider } from "firebase/auth";



// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyApEif-qPf_ImksZJ0v5xJzDf6OG7iIROM",

  authDomain: "erlanggaht-8267e.firebaseapp.com",

  databaseURL: "https://erlanggaht-8267e-default-rtdb.firebaseio.com",

  projectId: "erlanggaht-8267e",

  storageBucket: "erlanggaht-8267e.appspot.com",

  messagingSenderId: "190260397103",

  appId: "1:190260397103:web:387a47dab532504ee632da",

  measurementId: "G-B2H8N9EHGJ"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)
export const auth = getAuth(app);
export const provider = new GithubAuthProvider();

