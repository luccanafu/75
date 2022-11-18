import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyCgTeICmxDgr-Vt6McyKmw8CZtD9UwadNI",
  authDomain: "pro-71-ca07e.firebaseapp.com",
  projectId: "pro-71-ca07e",
  storageBucket: "pro-71-ca07e.appspot.com",
  messagingSenderId: "858009265476",
  appId: "1:858009265476:web:4c66179a42ef33213f6311"

};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
