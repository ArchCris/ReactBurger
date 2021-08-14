import firebase from "firebase/app";
import "firebase/firestore";

var app = firebase.initializeApp({
    apiKey: "AIzaSyDd2r1L1UPE0JuUz4VTe7o2kqfywLgoCPs",
    authDomain: "reactburger-cm.firebaseapp.com",
    projectId: "reactburger-cm",
    storageBucket: "reactburger-cm.appspot.com",
    messagingSenderId: "117434434260",
    appId: "1:117434434260:web:5320c20b34993dee23b141",
    measurementId: "G-B7FZLL8096"
});

export function getFirebase() {
  return app;
}
export function getFirestore() {
  return firebase.firestore(app);
}
