import { ref } from 'firebase/database';
import { onValue } from 'firebase/database';

import db from '../../../config/firebase/firebaseConfig';

const getNameQuestion = async (currentQuestionNumb: number, lang: string) => {
  const refer = `questions/question${currentQuestionNumb}/${lang}/name`;
  try {
    return await new Promise<string>(function (resolve, reject) {
      onValue(ref(db, refer), (snapshot) => {
        if (!snapshot.exists()) {
          reject(
            new Error(
              `No nameQuestion found. Check your path (refer variable). Value - ${refer}`,
            ),
          );
        }

        const nameQuestion = snapshot.val();
        
        if (nameQuestion) {
          resolve(nameQuestion);
        } else {
          reject(
            new Error(
              `Value of nameQuestion (${nameQuestion}) variable is falsy. Check it`,
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

export { getNameQuestion };
