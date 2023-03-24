import { ref } from "firebase/database";
import { onValue } from "firebase/database";
import db from "../../../config/firebase/firebaseConfig";

const getThemeQuestion = async (currentQuestionNumb: number) => {
    try {
      let lang = localStorage.getItem("i18nextLng");
      return await new Promise(function (resolve, reject) {
        onValue(
          ref(db, `questions/question${currentQuestionNumb}/${lang}/theme`),
          (snapshot) => {
            const themQuestion = snapshot.val();
            resolve(themQuestion);
          }
        );
      });
    } catch (error) {
      console.error(error);
    }
  };

  export {getThemeQuestion};