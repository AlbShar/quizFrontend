import { ref } from "firebase/database";
import { onValue } from "firebase/database";

import db from "../../../config/firebase/firebaseConfig";

const getNameQuestion = async (currentQuestionNumb: number) => {
    try {
      const lang = localStorage.getItem("i18nextLng");
      return await new Promise<string>(function (resolve, reject) {
        onValue(
          ref(db, `questions/question${currentQuestionNumb}/${lang}/name`),
          (snapshot) => {
            const nameQuestion = snapshot.val();
            resolve(nameQuestion);
          },
        );
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(`${error.message}`);
      } else {
        throw new Error(`Unknown error caught: ${error}`);
      }
    }
  };

  export {getNameQuestion};