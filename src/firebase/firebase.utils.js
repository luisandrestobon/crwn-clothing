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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch(error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;