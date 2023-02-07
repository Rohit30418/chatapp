// Import the functions you need from the SDKs you need
import 'firebase/compat/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAehv1ht6PuD9xHwcsnjHwGbXWNbsDIqC0",
  authDomain: "chatzone-59e25.firebaseapp.com",
  projectId: "chatzone-59e25",
  storageBucket: "chatzone-59e25.appspot.com",
  messagingSenderId: "620601583673",
  appId: "1:620601583673:web:cd51fb75d05cc8184245e8",
  measurementId: "G-PTJDGRKNL2"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: 'select_account' });

// export const signInWithGoogle = () => auth.signInWithPopup(provider);
export {auth, provider};
export default db