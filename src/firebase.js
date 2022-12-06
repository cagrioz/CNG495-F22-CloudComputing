// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyAQtZpPkqzUTkSC1m8bKMw2S8OT28Kkabo',
    authDomain: 'tinder-clone-276e6.firebaseapp.com',
    projectId: 'tinder-clone-276e6',
    storageBucket: 'tinder-clone-276e6.appspot.com',
    messagingSenderId: '451611071351',
    appId: '1:451611071351:web:5cbe01b89a46b730460772',
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = app.firestore();

export default database;
