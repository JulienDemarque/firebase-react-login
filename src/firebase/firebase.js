import * as firebase from "firebase";
require("dotenv").config();

var config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "expensify-25fdb.firebaseapp.com",
  databaseURL: "https://expensify-25fdb.firebaseio.com",
  projectId: "expensify-25fdb",
  storageBucket: "expensify-25fdb.appspot.com",
  messagingSenderId: "1010561071853"
};

firebase.initializeApp(config);

export function signupWithFirebase(email, password, status, callback) {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      // adding the status Teacher or Student on the firebase user
      user
        .updateProfile({
          displayName: status
        })
        .then(function() {
          console.log("user.displayName: ", user.displayName);
          //We should call a callback here that updates the react state
          callback({ message: "successfully sign up", success: true });
        })
        .catch(function(error) {
          callback(error);
        });
    })
    .catch(function(error) {
      callback(error);
    });
}

export function signinWithFirebase(email, password, callback) {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      callback({ message: "successfully sign in", success: true });
    })
    .catch(function(error) {
      callback(error);
    });
}

export function signoutWithFirebase() {
  firebase.auth().signOut();
}

export default firebase;
