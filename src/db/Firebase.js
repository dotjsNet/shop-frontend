import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAM0b40VU0QTBS7X4C5cd4ouXK5Q-xvCYI",
  authDomain: "jaystore-f5979.firebaseapp.com",
  databaseURL: "https://jaystore-f5979-default-rtdb.firebaseio.com",
  projectId: "jaystore-f5979",
  storageBucket: "jaystore-f5979.appspot.com",
  messagingSenderId: "259523922741",
  appId: "1:259523922741:web:cb9705a5632affa8305a7c",
  measurementId: "G-Q2C7MHJ4L7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
