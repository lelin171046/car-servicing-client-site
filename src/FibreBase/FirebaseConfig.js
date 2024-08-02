// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDA9MaO6zsXv5sfToV7lWx20SusYu0BOwc",
  authDomain: "car-servicing-9a6c4.firebaseapp.com",
  projectId: "car-servicing-9a6c4",
  storageBucket: "car-servicing-9a6c4.appspot.com",
  messagingSenderId: "618823301058",
  appId: "1:618823301058:web:6a443fa0a348b2b94ac85b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;