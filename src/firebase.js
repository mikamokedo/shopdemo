import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBeP0jtoHmh4GhFksHRUIQThIWRMXyMUBQ",
  authDomain: "todolist-2dbdc.firebaseapp.com",
  databaseURL: "https://todolist-2dbdc.firebaseio.com",
  projectId: "todolist-2dbdc",
  storageBucket: "todolist-2dbdc.appspot.com",
  messagingSenderId: "460066815730",
  appId: "1:460066815730:web:765f09e7b5732f8fa29a6b",
  measurementId: "G-LT3C7V9LDF"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export default firebaseApp;