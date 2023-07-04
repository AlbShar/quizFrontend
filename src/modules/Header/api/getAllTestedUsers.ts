import { ref } from 'firebase/database';
import { onValue } from 'firebase/database';

import db from '../../../config/firebase/firebaseConfig';

type Users = {
  [key in string]: object
};

const transformData = (res: Users): number => {
  return Object.entries(res).length;
};

const getAllTestedUsers = () => {
    const refer = 'users';

      return new Promise<number>(function (resolve, reject) {
        onValue(ref(db, refer), (snapshot) => {
           if (!snapshot.exists()) {
             reject(
               new Error(
                 `No quantityTested found. Check your path (refer variable). Value - ${refer}`,
               ),
             );
           }
          const quantityTested = transformData(snapshot.val());

          if (quantityTested) {
            resolve(quantityTested);
          } else {
            reject(
              new Error(
                `Value of quantityTested (${quantityTested}) variable is unavailable. Check it`,
              ),
            );
          }
        });
      });
  
};

export { getAllTestedUsers };
