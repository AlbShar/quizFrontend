import { ref } from 'firebase/database';
import { onValue } from 'firebase/database';

import db from '../config/firebase/firebaseConfig';

const getTotalQuestionsNumb = async () => {
  const refer = 'questions';

  return await new Promise<number>(function (resolve, reject) {
    onValue(ref(db, refer), (snapshot) => {
      
      if (!snapshot.exists()) {
        reject(`No questions found. Check your path (refer variable). Value - ${refer}`);
      }

      const totalQuestionsNumb: number = Object.entries(snapshot.val()).length;

      if (totalQuestionsNumb) {
        resolve(totalQuestionsNumb);
      } else {
        reject(
          `Value of totalQuestionsNumb (${totalQuestionsNumb}) variable is falsy. Check them.)`,
        );
      }
    });
  });
};

export { getTotalQuestionsNumb };
