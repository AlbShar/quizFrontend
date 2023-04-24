import { ref } from "firebase/database";
import { onValue } from "firebase/database";

import db from "../../../config/firebase/firebaseConfig";

const getAnswersDb = async (currentQuestionNumb: number) => {
       const lang = document.querySelector("html")?.getAttribute("lang");

      return await new Promise(function (resolve, reject) {
        onValue(
          ref(db, `answers/answers${currentQuestionNumb}/${lang}`),
          (snapshot) => {
            if (snapshot.val()) {
              resolve(snapshot.val());
            } else {
              reject();
            }
          },
        );
      });
   
  };

  export {getAnswersDb};