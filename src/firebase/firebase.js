import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAaWjhdYWG-kopXnvaJQpq-U4UogUUtVSk",
    authDomain: "tip-tracker-5c5d8.firebaseapp.com",
    projectId: "tip-tracker-5c5d8",
    storageBucket: "tip-tracker-5c5d8.appspot.com",
    messagingSenderId: "129456291323",
    appId: "1:129456291323:web:3d7778e2797a226e929f5e",
    measurementId: "G-27N14GPY7G"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);

  export default db;