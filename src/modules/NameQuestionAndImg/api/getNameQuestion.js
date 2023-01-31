import { ref } from "firebase/database";
import { onValue } from "firebase/database";
import {db} from "../../../index";

const getNameQuestion = async (currentQuestionNumb) => {
    try {
      let lang = localStorage.getItem("i18nextLng");
      return await new Promise(function (resolve, reject) {
        onValue(
          ref(db, `questions/question${currentQuestionNumb}/${lang}/name`),
          (snapshot) => {
            const nameQuestion = snapshot.val();
            resolve(nameQuestion);
          }
        );
      });
    } catch (error) {
      console.error(error);
    }
  };

  export {getNameQuestion};