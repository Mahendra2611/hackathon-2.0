// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyBW16Z7R3VUuf5FEFmb35eliERb0CVOOPw",
  authDomain: "auth-850d5.firebaseapp.com",
  projectId: "auth-850d5",
  storageBucket: "auth-850d5.appspot.com",
  messagingSenderId: "678337213901",
  appId: "1:678337213901:web:6501961e66464862788084",
  measurementId: "G-W9QYS93YE8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
