import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./i18nextInit";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { ref } from "firebase/database";
import { onValue } from "firebase/database";
import { deadline } from "./components/Timer";

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

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);


//#region Functions to get Data from DB(Firebase)
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

const getThemeQuestion = async (currentQuestionNumb) => {
  return (
    new Promise(function (resolve, reject) {
      onValue(
        ref(db, `questions/question${currentQuestionNumb}/theme`),
        (snapshot) => {
          const themQuestion = snapshot.val();
          resolve(themQuestion);
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
//#endregion

//#region  Functions for Homepage
const insertDataInfoTest = (textQuestions, textTime, ...selectors) => {
  getTotalQuestionsNumb().then(totalQuestionsNumb => {
    const textListItems = document.querySelector(selectors[0]).querySelectorAll(selectors[1]);

    textListItems[textListItems.length - 1].textContent = `${totalQuestionsNumb} ${textQuestions}`;
    // We paste deadline(total seconds for passing the test) at InfoTest component
    textListItems[0].textContent = `${deadline / 60} ${textTime}`;
  })
};

// We use the function, when there is html tags in JSON.
const convertJSONToText = (dataArray) => {
  dataArray.forEach(data => {
    if (document.querySelector(data.selector)) {
      document.querySelector(data.selector).innerHTML = JSON.parse(
        JSON.stringify(data.json)
      );
    }
  })
};
//#endregion

//#region Functions for Quizpage

const insertTotalQuestionNumbQuiz = (selector) => {
  getTotalQuestionsNumb().then(totalQuestionsNumb => {
    document.querySelector(selector).textContent = totalQuestionsNumb;
  })
};

const insertImageQuiz = (currentQuestionNumb, selectorWrapperImg, selectorImg) => {
  const wrapperImg = document.querySelector(selectorWrapperImg);

  onValue(
    ref(db, `questions/question${currentQuestionNumb}/img`),
    (snapshot) => {
      const imgSrc = snapshot.val();
      if (imgSrc) {
        wrapperImg.style.display = "block";
        document.querySelector(selectorImg).src = imgSrc;
      } else {
        wrapperImg.style.display = "none"
      }
    }
  );
 };

const setWidthScrollBar = (currentQuestionNumb, selectorQuiz, selectorScrollBar) => {
  getTotalQuestionsNumb().then(totalQuestionsNumb => {
    const quiz = document.querySelector(selectorQuiz);
    const widthContainer =
      quiz.clientWidth -
      parseInt(getComputedStyle(quiz).paddingRight) -
      parseInt(getComputedStyle(quiz).paddingLeft);
    let valueWidthScroll = widthContainer / totalQuestionsNumb;
    document.querySelector(selectorScrollBar).style.width = `${
      currentQuestionNumb * valueWidthScroll
    }px`;

  })
};

const insertThemeQuestionQuiz = (currentQuestionNumb, selector) => {
  getThemeQuestion(currentQuestionNumb).then(themeQuestion => {
    document.querySelector(selector).textContent =  themeQuestion;  
  });
};

const insertNameQuestionQuiz = (currentQuestionNumb, selector) => {
  onValue(
    ref(db, `questions/question${currentQuestionNumb}/name`),
    (snapshot) => {
      const nameQuestion = snapshot.val();
      document.querySelector(selector).textContent = nameQuestion;
    }
  );
};

//#endregion

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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
export { db, getTotalQuestionsNumb, getThemeQuestion, insertDataInfoTest, convertJSONToText, insertNameQuestionQuiz, setWidthScrollBar, insertImageQuiz, insertTotalQuestionNumbQuiz, checkIsImgAlt, insertThemeQuestionQuiz};

// firebase tutorial - https://www.youtube.com/watch?v=pP7quzFmWBY&ab_channel=Firebase
