import { ref } from 'firebase/database';
import { onValue } from 'firebase/database';
import { getValueFromLocalStorage } from '../../../helpers/getValueFromLocalStorage';

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
    const profession = getValueFromLocalStorage('profession');

  return new Promise<TAnswersDB>(function (resolve, reject) {
    onValue(
      ref(db, `${profession}/users/user${idUser}/answers/`),
      (snapshot) => {
        resolve(snapshot.val());
      },
    );
  });
};

export { getUserAnswers };
