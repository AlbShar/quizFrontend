import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./i18nextInit";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { ref } from "firebase/database";
import { onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDVNDua7phkjh4mSytFaX6CTuJsImD6Od8",
  authDomain: "quizfrontend-ac9ee.firebaseapp.com",
  databaseURL:
    "https://quizfrontend-ac9ee-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "quizfrontend-ac9ee",
  storageBucket: "quizfrontend-ac9ee.appspot.com",
  messagingSenderId: "598479422146",
  appId: "1:598479422146:web:812463d02e2684ad0bf15b",
};
// const uniqueIdUser = document.querySelector('.btn').dataset.userId;

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const getTotalQuestionsNumb = () => {
  return (
    new Promise(function (resolve, reject) {
      onValue(ref(db, `questions`), (snapshot) => {
        const totalQuestionsNumb = Object.entries(snapshot.val()).length;
        resolve(totalQuestionsNumb);
      });
    })
  )
};

const getThemeQuestion = (currentQuestionNumb) => {
  return (
    new Promise(function (resolve, reject) {
      onValue(
        ref(db, `questions/question${currentQuestionNumb}/theme`),
        (snapshot) => {
          const themQuestion = snapshot.val();
          resolve(themQuestion);
          console.log(themQuestion)
        }
      );
    })
  )
};

const getNameQuestion = (currentQuestionNumb) => {
  return (
    new Promise(function (resolve, reject) {
      onValue(
        ref(db, `questions/question${currentQuestionNumb}/name`),
        (snapshot) => {
          const nameQuestion = snapshot.val();
          resolve(nameQuestion);
        }
      );
    })
  )
};
  
 const getTotalPoints = () => {
  return (
    new Promise(function (resolve, reject) {
      onValue(
        ref(db, `userAnswers`),
        (snapshot) => {
          const answersUser = Object.values(snapshot.val());
          resolve(answersUser.map(answerUser => answerUser.point).reduce((sum, current) => sum + current, 0))
        }
      );
    })
  )
 };

 const checkIsImgAlt = (item, index) => {
  try {
    if (!item.alt) {
      throw new Error(
        `В массиве infoTestBlock(элемент №${index + 1}) пустое поле alt`
      );
    }
  } catch (e) {
    console.error(e);
  }
 };

 const getImageSrc = (currentQuestionNumb) => {
  return (
    new Promise(function (resolve, reject) {
      onValue(
        ref(db, `questions/question${currentQuestionNumb}/img`),
        (snapshot) => {
          const imgSrc = snapshot.val();
          if (imgSrc) {
            resolve(imgSrc);
          } else {
            reject(imgSrc)
          }
        }
      );
    })
  )
 };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
export { db, getTotalQuestionsNumb, getThemeQuestion, getNameQuestion, getImageSrc, checkIsImgAlt};

// firebase tutorial - https://www.youtube.com/watch?v=pP7quzFmWBY&ab_channel=Firebase
