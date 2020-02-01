import * as firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCOfIV5Q2SabK2h0rtoFTCKaxra9fzgNvM",
    authDomain: "shopdemo-47000.firebaseapp.com",
    databaseURL: "https://shopdemo-47000.firebaseio.com",
    projectId: "shopdemo-47000",
    storageBucket: "shopdemo-47000.appspot.com",
    messagingSenderId: "938557360106",
    appId: "1:938557360106:web:b3b49a0a51ec664b5a1493",
    measurementId: "G-FJ9N5BN9G1"
  };


  firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;