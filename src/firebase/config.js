// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCRq8gqckJOPj9dUOW3IR66LFFmwwZAkxo",
    authDomain: "ecommerce-1-react.firebaseapp.com",
    projectId: "ecommerce-1-react",
    storageBucket: "ecommerce-1-react.appspot.com",
    messagingSenderId: "133840442095",
    appId: "1:133840442095:web:ddd3606f228879ff34411a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);