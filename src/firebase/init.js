// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/app";
//import firestore from "firebase/firestore";
import 'firebase/firestore';
var config = {
    apiKey: "AIzaSyCtcT2wXLXEWbyvvANqe1vB0HNgh6_yJCk",
    authDomain: "ninja-smoothies-5a859.firebaseapp.com",
    projectId: "ninja-smoothies-5a859",
    storageBucket: "ninja-smoothies-5a859.appspot.com",
    messagingSenderId: "610881409899",
    appId: "1:610881409899:web:7e945136d9cbb3933bb22e",
    measurementId: "G-4WT2C1WKR6"
  };
  const firebaseapp = firebase.initializeApp(config);
  export default  firebaseapp.firestore();