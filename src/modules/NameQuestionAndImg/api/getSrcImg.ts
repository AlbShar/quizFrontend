import { ref } from 'firebase/database';
import { onValue } from 'firebase/database';

import db from '../../../config/firebase/firebaseConfig';

const getSrcImg = async (currentQuestionNumb: number, lang: string) => {
  const refer = `questions/question${currentQuestionNumb}/${lang}/img`;
  try {
    return await new Promise<string>(function (resolve, reject) {
      onValue(
        ref(db, `questions/question${currentQuestionNumb}/${lang}/img`),
        (snapshot) => {
          if (!snapshot.exists()) {
            reject(
              new Error(
                `No srcImg found. Check your path (refer variable). Value - ${refer}`,
              ),
            );
          }

          const srcImg = snapshot.val();

          if (srcImg) {
            resolve(srcImg);
          } else {
            reject(
              new Error(
                `Value of srcImg (${srcImg}) variable is falsy. Check it`,
              ),
            );
          }
        },
      );
    });
  } catch (e: unknown) {
    if (e instanceof Error) {
      throw new Error(e.message);
    } else {
      throw new Error(`Unknown error caught: ${e}`);
    }
  }
  
};

export { getSrcImg };
