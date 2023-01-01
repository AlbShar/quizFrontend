import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./i18nextInit";
import { initializeApp } from "firebase/app";
import { getDatabase, set, push } from "firebase/database";
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
const getTotalQuestionsNumb = async () => {  
  return await new Promise(function (resolve, reject) {
      onValue(ref(db, `questions`), (snapshot) => {
        const totalQuestionsNumb = Object.entries(snapshot.val()).length;
        resolve(totalQuestionsNumb);
      });
    })
};



const getAnswersDb = async (currentQuestionNumb) => {
  let lang = localStorage.getItem('i18nextLng');;

  return await new Promise(function (resolve, reject) {
      onValue(ref(db, `answers/answers${currentQuestionNumb}/${lang}`), (snapshot) => {
        const answersDB = Object.entries(snapshot.val());
        resolve(answersDB.map((item) => item.join(". ")));
      });    
    })
};

const getThemeQuestion = async (currentQuestionNumb) => {
  let lang = localStorage.getItem('i18nextLng');
  return await new Promise(function (resolve, reject) {
      onValue(
        ref(db, `questions/question${currentQuestionNumb}/${lang}/theme`),
        (snapshot) => {
          const themQuestion = snapshot.val();
          resolve(themQuestion);
        }
      );
    })
};

const getNameQuestion = async (currentQuestionNumb) => {
  let lang = localStorage.getItem('i18nextLng');
  return await new Promise(function (resolve, reject) {
      onValue(
        ref(db, `questions/question${currentQuestionNumb}/${lang}/name`),
        (snapshot) => {
          const nameQuestion = snapshot.val();
          resolve(nameQuestion);
        }
      );
    })

}

const getTotalPointsDB = () => {
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
const insertDataInfoTest = async (textQuestions, textTime, ...selectors) => {
  const textListItems = document.querySelector(selectors[0]).querySelectorAll(selectors[1]);
  let totalQuestionsNumb = await getTotalQuestionsNumb();
  
  textListItems[textListItems.length - 1].textContent = `${totalQuestionsNumb} ${textQuestions}`;
  // We paste deadline(total seconds for passing the test) at InfoTest component
  textListItems[0].textContent = `${deadline / 60} ${textTime}`;
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

const removeAttributesAnswers = (selectorAnswers) => {
  const answersItem = document.querySelectorAll(selectorAnswers);

  answersItem.forEach(answerItem => {
    if (answerItem.dataset.useranswer) {
      answerItem.style='';
      answerItem.removeAttribute('data-useranswer');
    }
  })

}

const getRightAnswerDB = async (currentQuestionNumb) => {
  let lang = localStorage.getItem('i18nextLng');

  const rightAnswer = await new Promise(function (resolve, reject) {
      onValue(
        ref(db, `questions/question${currentQuestionNumb}/${lang}/rightAnswer`),
        (snapshot) => {
          const rightAnswerDb = snapshot.val();
          resolve(rightAnswerDb);
        }
      );
    });

    return rightAnswer;
}

const sendDataDb = async (
  currentQuestionNumb,
  selectorQuestion,
  userAnswer,
  selectorTheme,
  timeQuestion,
  uniqueIdUser
) => {
  const theme = document.querySelector(selectorTheme).textContent;
  const question = document.querySelector(selectorQuestion).textContent;

  let referenceUserAnswers = ref(db,`user${uniqueIdUser}/answer${currentQuestionNumb}`);
  const rightAnswer = await getRightAnswerDB(currentQuestionNumb);

  set(referenceUserAnswers, {
    id: push(referenceUserAnswers).key,
    question: question,
    userAnswer: userAnswer,
    theme: theme,
    point: rightAnswer === userAnswer ? 1 : 0,
    time: timeQuestion,
  });
};

const highlightPreviousAnswer = (uniqueIdUser, currentQuestionNumb, selectorAnswers) => {
  onValue(
    ref(db, `user${uniqueIdUser}/answer${currentQuestionNumb}`),
    (snapshot) => {
       setTimeout(() => {
        document.querySelectorAll(selectorAnswers).forEach((answerItem) => {
            if (answerItem.textContent === snapshot.val().userAnswer) {
              answerItem.style.border = '2px solid rgb(103, 104, 215)';
              answerItem.setAttribute('data-useranswer', true);
            }
          });
      }, 1);     

    }, {
      onlyOnce: true
    }
  ); 
};

const insertTotalQuestionNumbQuiz = async (selector) => {
  let totalQuestionsNumb = await getTotalQuestionsNumb();
  document.querySelector(selector).textContent = totalQuestionsNumb;
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

const setWidthScrollBar = async (currentQuestionNumb, selectorQuiz, selectorScrollBar) => {
  const totalQuestionsNumb = await getTotalQuestionsNumb();
    const quiz = document.querySelector(selectorQuiz);
    const widthContainer =
      quiz.clientWidth -
      parseInt(getComputedStyle(quiz).paddingRight) -
      parseInt(getComputedStyle(quiz).paddingLeft);
    let valueWidthScroll = widthContainer / totalQuestionsNumb;
    document.querySelector(selectorScrollBar).style.width = `${
      currentQuestionNumb * valueWidthScroll
    }px`;

};

const insertThemeQuestionQuiz = async (currentQuestionNumb, selector) => {
  const nameThemeQuestion = await getThemeQuestion(currentQuestionNumb);
  document.querySelector(selector).textContent =  nameThemeQuestion
};

const insertNameQuestionQuiz = async (currentQuestionNumb, selector) => {
  let nameQuestion = await getNameQuestion(currentQuestionNumb);
  document.querySelector(selector).textContent = nameQuestion;

};

const setAttributesUserAnswer = (e, selectorAnswers, cssBorder, nameDataAtrr) => {
  document.querySelectorAll(selectorAnswers).forEach((item) => {
    item.style = '';
    item.removeAttribute(nameDataAtrr);
  });
  e.target.style.border = cssBorder;
  e.target.setAttribute(nameDataAtrr, true);
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
export { db, getTotalQuestionsNumb, getAnswersDb, removeAttributesAnswers, setAttributesUserAnswer, getThemeQuestion, highlightPreviousAnswer, sendDataDb,  insertDataInfoTest, convertJSONToText, insertNameQuestionQuiz, setWidthScrollBar, insertImageQuiz, insertTotalQuestionNumbQuiz, checkIsImgAlt, insertThemeQuestionQuiz};
