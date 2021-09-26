import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyD3Bhc6xXCMvlusAZOAs7I1HvG4IzBkLks",
  authDomain: "pro-ffae6.firebaseapp.com",
  databaseURL: "https://pro-ffae6-default-rtdb.firebaseio.com",
  projectId: "pro-ffae6",
  storageBucket: "pro-ffae6.appspot.com",
  messagingSenderId: "212451322952",
  appId: "1:212451322952:web:9d642f17cd9535e7f63c7d" 
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

