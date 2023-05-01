import { ref } from "firebase/database";
import { onValue } from "firebase/database";

import { getIdUser } from "../../../helpers/getIdUser";
import db from "../../../config/firebase/firebaseConfig";


type TAnswersDB = {
    [key: string]: {
        point: number,
        quantityPause: number,
        question: string,
        theme: string,
        userAnswer: string,
    }
}

const getUserAnswers = () => {
    return new Promise<TAnswersDB>(function (resolve, reject) {
      onValue(ref(db, `users/user${getIdUser("idUser")}/answers`), (snapshot) => {
        resolve(snapshot.val());
      });
    });
  };

  export {getUserAnswers};