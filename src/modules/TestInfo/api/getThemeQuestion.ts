import { ref } from 'firebase/database';
import { onValue } from 'firebase/database';

import db from '../../../config/firebase/firebaseConfig';

const getThemeQuestion = async (currentQuestionNumb: number, lang: string) => {
  try {
    return await new Promise(function (resolve, reject) {
      onValue(
        ref(db, `questions/question${currentQuestionNumb}/${lang}/theme`),
        (snapshot) => {
          const themQuestion = snapshot.val();
          resolve(themQuestion);
        },
      );
    });
  } catch (error) {
    console.error(error);
  }
};

export { getThemeQuestion };
