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

const getUserAnswers = async (idUser: string) => {
  const profession = getValueFromLocalStorage('profession');
  const url = `${profession}/users/user${idUser}/answers`;

  return new Promise<TAnswersDB>(function (resolve, reject) {
    setTimeout(() => {
      onValue(ref(db, url), async (snapshot) => {
        resolve(snapshot.val());
      });
    }, 50);
  });
};

export { getUserAnswers };
