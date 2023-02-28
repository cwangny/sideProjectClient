// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3dhsAGbWZCi76KQQzM_xiTlKVKLIqgRY",
  authDomain: "mlproject-b6a53.firebaseapp.com",
  projectId: "mlproject-b6a53",
  storageBucket: "mlproject-b6a53.appspot.com",
  messagingSenderId: "251704464071",
  appId: "1:251704464071:web:76b8653ae0b4bf4b0ae4e2",
  measurementId: "G-E33C8GJF33",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  // eslint-disable-next-line no-unused-vars
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
