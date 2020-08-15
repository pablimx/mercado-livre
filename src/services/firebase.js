import * as firebase from "firebase";

// Optionally import the services that you want to use
import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDEGUQQRVwbwx71YybH4-dZ7LSY-w_-DfU",
  authDomain: "mercadolivre-clone.firebaseapp.com",
  databaseURL: "https://mercadolivre-clone.firebaseio.com",
  projectId: "mercadolivre-clone",
  storageBucket: "mercadolivre-clone.appspot.com",
  messagingSenderId: "324614569016",
  appId: "1:324614569016:web:735e5d8f97fe674e053acd",
  measurementId: "G-BKE8FYZSXL",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
