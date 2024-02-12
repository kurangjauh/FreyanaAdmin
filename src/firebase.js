// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, connectAuthEmulator} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEqdZxiNzd8aSjGw_-7AxDQsCGPWmX0ns",
  authDomain: "freyana-db-49b10.firebaseapp.com",
  databaseURL: "https://freyana-db-49b10-default-rtdb.firebaseio.com",
  projectId: "freyana-db-49b10",
  storageBucket: "freyana-db-49b10.appspot.com",
  messagingSenderId: "165794555382",
  appId: "1:165794555382:web:1b3cefa7c2d6ef3c32d3d7",
  measurementId: "G-PKYLZC9BGN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize Library
export const auth = getAuth(app);
export const db = getFirestore(app);
// connectAuthEmulator(auth, "http://localhost:3000")
const analytics = getAnalytics(app);
export default app;