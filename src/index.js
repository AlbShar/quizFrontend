import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './i18nextInit';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDVNDua7phkjh4mSytFaX6CTuJsImD6Od8",
  authDomain: "quizfrontend-ac9ee.firebaseapp.com",
  databaseURL: "https://quizfrontend-ac9ee-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "quizfrontend-ac9ee",
  storageBucket: "quizfrontend-ac9ee.appspot.com",
  messagingSenderId: "598479422146",
  appId: "1:598479422146:web:812463d02e2684ad0bf15b"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app)
export const reference = ref(db, "questions/question1/name"); 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// firebase tutorial - https://www.youtube.com/watch?v=pP7quzFmWBY&ab_channel=Firebase
