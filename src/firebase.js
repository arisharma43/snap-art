import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAshAsD5ErYqbw4PD4nnJwg4LNWJfC4n-8",
  authDomain: "snap-art-32c59.firebaseapp.com",
  projectId: "snap-art-32c59",
  storageBucket: "snap-art-32c59.appspot.com",
  messagingSenderId: "711079556712",
  appId: "1:711079556712:web:5c0aa48453e72569a72ddd",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
