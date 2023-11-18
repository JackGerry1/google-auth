// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVT5hgX8hx2yiVW9fUOu6GLH6E21y-gtE",
  authDomain: "auth-v2-ab357.firebaseapp.com",
  projectId: "auth-v2-ab357",
  storageBucket: "auth-v2-ab357.appspot.com",
  messagingSenderId: "820424131738",
  appId: "1:820424131738:web:678a27d1208449e5a28b23",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
