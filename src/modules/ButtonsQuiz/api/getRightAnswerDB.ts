import { ref, onValue } from 'firebase/database';

import db from '../../../config/firebase/firebaseConfig';

const getRightAnswerDB = async (currentQuestionNumb: number, lang: string) => {
  const refer = `questions/question${currentQuestionNumb}/${lang}/rightAnswer`;

  try {
    return await new Promise(function (resolve, reject) {
      onValue(ref(db, refer), (snapshot) => {
        if (!snapshot.exists()) {
          reject(
            new Error(
              `No rightAnswer found. Check your path (refer variable). Value - ${refer}`,
            ),
          );
        }

        const rightAnswerDb = snapshot.val();

        if (rightAnswerDb) {
          resolve(rightAnswerDb);
        } else {
          reject(
            new Error(
              `Value of rightAnswerDb (${rightAnswerDb}) variable is unavailable. Check them`,
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

export { getRightAnswerDB };
