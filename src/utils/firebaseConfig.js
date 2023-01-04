// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQ9Qyv6JlVeIxgg4Nog95SdUEjzlx44GM",
  authDomain: "eltonydelivery-d3644.firebaseapp.com",
  projectId: "eltonydelivery-d3644",
  storageBucket: "eltonydelivery-d3644.appspot.com",
  messagingSenderId: "655876423944",
  appId: "1:655876423944:web:9d0506c48cb97a43c7acbd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)