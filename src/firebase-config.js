// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"
// import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChQ7iGbgj8-RI2tvP4aIvcNhB6wGf-wP4",
  authDomain: "cft-app-f7847.firebaseapp.com",
  projectId: "cft-app-f7847",
  storageBucket: "cft-app-f7847.appspot.com",
  messagingSenderId: "1050656224804",
  appId: "1:1050656224804:web:2c870841fb1278d8a70ab1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const db = getDatabase(app);
const storage = getStorage(app);

export const db = getFirestore(app)
export default storage
