// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import * as firebase from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQyutJHQDSr9RCPIm9w0JSyD1lsmprnnY",
  authDomain: "united-creek-276420.firebaseapp.com",
  databaseURL: "https://united-creek-276420-default-rtdb.firebaseio.com",
  projectId: "united-creek-276420",
  storageBucket: "united-creek-276420.appspot.com",
  messagingSenderId: "1057230330643",
  appId: "1:1057230330643:web:c0ed15c95d5f7553c318e6",
  measurementId: "G-585E7WB92D",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const auth = firebase.auth();

export { auth };
