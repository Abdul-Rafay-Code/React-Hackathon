// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import {getFireStore} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJTPQ0E8fTClQqdMqiBZ-ifOgd8TMrTSk",
  authDomain: "react-hackhathon.firebaseapp.com",
  projectId: "react-hackhathon",
  storageBucket: "react-hackhathon.appspot.com",
  messagingSenderId: "916211018929",
  appId: "1:916211018929:web:904948f94afdbc16930690",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firedb = getFirestore(app);
const storage = getStorage(app);

export { auth, firedb, storage };
