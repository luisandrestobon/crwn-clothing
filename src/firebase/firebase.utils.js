import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCERNlx9REsgjap3AzB_6rR5sF7MWxwXVE",
    authDomain: "crwn-db-76d2e.firebaseapp.com",
    databaseURL: "https://crwn-db-76d2e.firebaseio.com",
    projectId: "crwn-db-76d2e",
    storageBucket: "crwn-db-76d2e.appspot.com",
    messagingSenderId: "125770153399",
    appId: "1:125770153399:web:c29474a4ac066b5ec43c32",
    measurementId: "G-PM99CVCHBK"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;