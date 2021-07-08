import firebase from "firebase/app";
require("firebase/firestore")

var firebaseConfig = {
    apiKey: "AIzaSyByh-gaG7j30_PAIKx1YeoyihbfnqdlkIM",
    authDomain: "todolist-3cd15.firebaseapp.com",
    projectId: "todolist-3cd15",
    storageBucket: "todolist-3cd15.appspot.com",
    messagingSenderId: "295730415575",
    appId: "1:295730415575:web:d27c86a4e8e9d5c2fd6d92"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  ​
var db = firebase.firestore()
export {firebase, db as default}