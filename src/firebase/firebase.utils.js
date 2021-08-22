import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyCwoj-qjrYVZF_nHdZWdPfKr1kvlkLBGGA',
  authDomain: 'e-commerce-website-5e142.firebaseapp.com',
  projectId: 'e-commerce-website-5e142',
  storageBucket: 'e-commerce-website-5e142.appspot.com',
  messagingSenderId: '1087414762522',
  appId: '1:1087414762522:web:3b92c9461d8b694ca565a3',
  measurementId: 'G-WEFJBR51YM',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

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
        ...additionalData,
      });
    } catch (error) {
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
