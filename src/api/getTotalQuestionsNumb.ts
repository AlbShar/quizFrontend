import { ref } from 'firebase/database';
import { onValue } from 'firebase/database';

import db from '../config/firebase/firebaseConfig';

type Data = {
  [key: string]: string
};

const transformData = (data: Data): number => {
  return Object.entries(data).length;
};

const getTotalQuestionsNumb = async () => {
  const refer = 'questions';

  return await new Promise<number>(function (resolve, reject) {
    onValue(ref(db, refer), (snapshot) => {
      
      if (!snapshot.exists()) {
        reject(`No questions found. Check your path (refer variable). Value - ${refer}`);
      }

      const totalQuestionsNumb = transformData(snapshot.val());

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
