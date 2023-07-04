import { ref } from 'firebase/database';
import { onValue } from 'firebase/database';

import db from '../config/firebase/firebaseConfig';
import { useHandleResponseAndError } from '../hooks/useHandleResponseAndError';

type Data = {
  [key: string]: string;
};

const transformData = (data: Data): number => {
  return Object.entries(data).length;
};

const getTotalQuestionsNumb = async () => {
  const refer = 'questions';

    return await new Promise<number>(function (resolve, reject) {
      onValue(ref(db, refer), (snapshot) => {
        const { getValue } = useHandleResponseAndError(
          snapshot,
          refer,
          reject,
          transformData,
        );

        resolve(getValue());
      });
    });
};

export { getTotalQuestionsNumb };
