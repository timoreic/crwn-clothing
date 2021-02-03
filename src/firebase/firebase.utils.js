import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBmBIUk1bUegZ-nAXg2QfCznYwfs4Vpb8w',
  authDomain: 'crwn-db-2f401.firebaseapp.com',
  projectId: 'crwn-db-2f401',
  storageBucket: 'crwn-db-2f401.appspot.com',
  messagingSenderId: '351084708313',
  appId: '1:351084708313:web:cf05da1149d271f0de99c8',
  measurementId: 'G-B6P0MEXKJ6',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
