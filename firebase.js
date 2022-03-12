// Import the functions you need from the SDKs you need
// import * as firebase from "firebase/app"
// var auth=require("firebase/auth")
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAX-BoaAY64JGM-3CtfsZbC22PSVDlQKCw",
  authDomain: "fir-auth-21268.firebaseapp.com",
  projectId: "fir-auth-21268",
  storageBucket: "fir-auth-21268.appspot.com",
  messagingSenderId: "304813067009",
  appId: "1:304813067009:web:24c17af9d751360b56e900"
};

// Initialize Firebase
let Firebase;

Firebase = firebase.initializeApp(firebaseConfig);

const auth=firebase.auth()

export default auth;


