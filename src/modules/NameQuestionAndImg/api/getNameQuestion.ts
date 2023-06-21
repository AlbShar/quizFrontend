import { ref } from 'firebase/database';
import { onValue } from 'firebase/database';

import db from '../../../config/firebase/firebaseConfig';

const getNameQuestion = async (currentQuestionNumb: number, lang: string) => {
  return await new Promise<string>(function (resolve, reject) {
    onValue(
      ref(db, `questions/question${currentQuestionNumb}/${lang}/name`),
      (snapshot) => {
        const nameQuestion = snapshot.val();
        resolve(nameQuestion);
      },
    );
  });
};

export { getNameQuestion };
