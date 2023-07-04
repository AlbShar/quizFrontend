import { ref } from 'firebase/database';
import { onValue } from 'firebase/database';

import db from '../../../config/firebase/firebaseConfig';

import type { AnswersType } from '../type';

const getAnswersDb = async (
  currentQuestionNumb: number,
  lang: string,
): Promise<AnswersType> => {
  const refer = `answers/answers${currentQuestionNumb}/${lang}`;
  try {
    return await new Promise(function (resolve, reject) {
      onValue(ref(db, refer), (snapshot) => {
        if (!snapshot.exists()) {
          reject(
            new Error(
              `No answers found. Check your path (refer variable). Value - ${refer}`,
            ),
          );
        }

        const answers = snapshot.val();

        if (answers) {
          resolve(answers);
        } else {
          reject(
            new Error(
              `Value of answers (${answers}) variable is falsy. Check them`,
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

export { getAnswersDb };
