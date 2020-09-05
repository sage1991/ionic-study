import * as Firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDariAOCiOPAOrpqkD6wl4FdB7o7clpUXg",
  authDomain: "daily-moments-9d149.firebaseapp.com",
  databaseURL: "https://daily-moments-9d149.firebaseio.com",
  projectId: "daily-moments-9d149",
  storageBucket: "daily-moments-9d149.appspot.com",
  messagingSenderId: "212328950683",
  appId: "1:212328950683:web:ee1020b38fb9b546298f3e"
};

const firebase = Firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();

export { auth, firestore, storage };