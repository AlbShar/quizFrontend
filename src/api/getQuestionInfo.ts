import { ref } from "firebase/database";
import { onValue } from "firebase/database";

import db from "../config/firebase/firebaseConfig";


const getQuestionInfo = async (currentQuestionNumb: number) => {
  try {
    const lang = localStorage.getItem("i18nextLng");

    return await new Promise<any>(function (resolve, reject) {
      onValue(
        ref(db, `questions/question${currentQuestionNumb}/${lang}`),
        (snapshot) => {
          resolve(snapshot.val());
        },
      );
    });
  } catch (error) {
    console.error(error);
  }
};

export { getQuestionInfo };
