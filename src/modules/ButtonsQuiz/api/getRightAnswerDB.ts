import { ref, onValue } from "firebase/database";

import db from "../../../config/firebase/firebaseConfig";

const getRightAnswerDB = async (currentQuestionNumb: number) => {
    try {
      const lang = document.querySelector("html")?.getAttribute("lang");
  
      const rightAnswer = await new Promise(function (resolve, reject) {
        onValue(
          ref(db, `questions/question${currentQuestionNumb}/${lang}/rightAnswer`),
          (snapshot) => {
            const rightAnswerDb = snapshot.val();
            resolve(rightAnswerDb);
          },
        );
      });
  
      return rightAnswer;
    } catch (error) {
      console.error(error);
    }
  };

  export {getRightAnswerDB};