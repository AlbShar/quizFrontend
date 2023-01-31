import { ref } from "firebase/database";
import { onValue } from "firebase/database";
import {db} from "../../../index";

const getAnswersDb = async (currentQuestionNumb) => {
    try {
      let lang = localStorage.getItem("i18nextLng");
  
      return await new Promise(function (resolve, reject) {
        onValue(
          ref(db, `answers/answers${currentQuestionNumb}/${lang}`),
          (snapshot) => {
            const answersDB = Object.entries(snapshot.val());
            resolve(answersDB.map((item) => item.join(". ")));
          }
        );
      });
    } catch (error) {
      console.error(error);
    }
  };

  export {getAnswersDb};