import firebase from "firebase/app"
import "firebase/firestore"
import 'firebase/storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnuS-zZdPhVAl5HzCFbA1S5z6t2PqEeUI",
  authDomain: "agroseva-4fdc8.firebaseapp.com",
  databaseURL: "https://agroseva-4fdc8-default-rtdb.firebaseio.com",
  projectId: "agroseva-4fdc8",
  storageBucket: "agroseva-4fdc8.appspot.com",
  messagingSenderId: "472446389447",
  appId: "1:472446389447:web:59e7eda4d49434c437c2e2",
  measurementId: "G-DLGQMVBWWM"
};


firebase.initializeApp(firebaseConfig)
// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore()
const storage = firebase.storage();
// Initialize Firebase
export {db, storage}