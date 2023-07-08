import { ref } from 'firebase/database';
import { onValue } from 'firebase/database';

import db from '../../../config/firebase/firebaseConfig';

type TAnswersDB = {
  [key: string]: {
    point: number;
    quantityPause: number;
    question: string;
    theme: string;
    userAnswer: string;
  };
};

const getUserAnswers = (idUser: string) => {
  const refer = `users/user${idUser}/answers`;
  try {
    return new Promise<TAnswersDB>(function (resolve, reject) {
      onValue(ref(db, refer), (snapshot) => {
         if (!snapshot.exists()) {
           reject(
             new Error(
               `No userAnswers found. Check your path (refer variable). Value - ${refer}`,
             ),
           );
         }
         const userAnswers = snapshot.val();

         if (userAnswers) {
           resolve(userAnswers);
         } else {
           reject(
             new Error(
               `Value of userAnswers (${userAnswers}) variable is unavailable. Check them`,
             ),
           );
         }

      });
    });
  } catch (e: unknown) {
    if (e instanceof Error) {
      throw new Error(e.message);
    } else {
      throw new Error(`Unknown error caught: ${e}`);
    }
  }
};

export { getUserAnswers };
