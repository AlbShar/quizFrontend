import { ref } from 'firebase/database';
import { onValue } from 'firebase/database';

import db from '../config/firebase/firebaseConfig';



const getDataFromDB = async <TData>(url: string) => {

  return await new Promise(function (resolve, reject) {
    onValue(ref(db, url), (snapshot) => {
      const value: TData = snapshot.val();

      if (value) {
        return resolve(value);
      } else {
        reject(new Error(`Value  (${value})  is unavailable. Check it`));
      }
    });
  });
};

export { getDataFromDB };
