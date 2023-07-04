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
  return new Promise<TAnswersDB>(function (resolve, reject) {
    onValue(ref(db, `users/user${idUser}/answers`), (snapshot) => {
      resolve(snapshot.val());
    });
  });
};

export { getUserAnswers };
