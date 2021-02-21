import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyBfTKS4OCERu0jyFb41tJBRBuiUiaXhxeE",
    authDomain: "react-app-5a6cb.firebaseapp.com",
    projectId: "react-app-5a6cb",
    storageBucket: "react-app-5a6cb.appspot.com",
    messagingSenderId: "95748503333",
    appId: "1:95748503333:web:fb0e6622eac59f1d684ccc"
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}