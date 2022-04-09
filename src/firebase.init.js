// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEV85nFC1-RcOf3JrxhzozGB2rPlw_Ad0",
  authDomain: "ema-john-app-5e021.firebaseapp.com",
  projectId: "ema-john-app-5e021",
  storageBucket: "ema-john-app-5e021.appspot.com",
  messagingSenderId: "910626857900",
  appId: "1:910626857900:web:ffc10dc01888601c295009"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);
export default auth; 