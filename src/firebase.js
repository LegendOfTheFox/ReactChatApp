import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBdSF_li0Z2U-VSwX-H7-A5NcJxvnqj9wo",
  authDomain: "chatapp-bc570.firebaseapp.com",
  databaseURL: "https://chatapp-bc570.firebaseio.com",
  projectId: "chatapp-bc570",
  storageBucket: "chatapp-bc570.appspot.com",
  messagingSenderId: "528363214004"
};

firebase.initializeApp(config);

export default firebase;
