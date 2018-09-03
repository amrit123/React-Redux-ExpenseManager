import * as firebase from "firebase";
 /* import firebase from 'firebase/app';
import 'firebase/database';   */
var config = {
    apiKey: "AIzaSyBWQjV97x4Q0l1zLRdJUrox2qm7Rd1AYlo",
    authDomain: "expensetracker-8910b.firebaseapp.com",
    databaseURL: "https://expensetracker-8910b.firebaseio.com",
    projectId: "expensetracker-8910b",
    storageBucket: "expensetracker-8910b.appspot.com",
    messagingSenderId: "411329768356"
  };
  firebase.initializeApp(config);
  const database=firebase.database();

  const googleAuthProvider= new firebase.auth.GoogleAuthProvider(); //provides authentication using google acount

  export {firebase,googleAuthProvider, database as default};
