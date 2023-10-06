// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyA3dv6yd_NF8NkAGmk9nqRScO5HlZMf7AM",

  authDomain: "kaylestore-45d99.firebaseapp.com",

  projectId: "kaylestore-45d99",

  storageBucket: "kaylestore-45d99.appspot.com",

  messagingSenderId: "852040046354",

  appId: "1:852040046354:web:75e6729527de0c781a45cb"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);