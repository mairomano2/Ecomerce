import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUA84wdotQIzn1mUm-QGe2-hYvtWzGbhY",
  authDomain: "la-tiendita-865d0.firebaseapp.com",
  projectId: "la-tiendita-865d0",
  storageBucket: "la-tiendita-865d0.appspot.com",
  messagingSenderId: "597997978710",
  appId: "1:597997978710:web:63772c8ebded1da1b6e7f7",
  measurementId: "G-Y74VJ7J9QZ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)