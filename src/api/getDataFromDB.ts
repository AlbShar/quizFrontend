import { ref } from 'firebase/database';
import { onValue } from 'firebase/database';

import { getValueFromLocalStorage } from '../helpers/getValueFromLocalStorage';

import db from '../config/firebase/firebaseConfig';



const getDataFromDB = async <TData>(url: string) => {

  return await new Promise(function (resolve, reject) {
    onValue(
      ref(db, `${getValueFromLocalStorage('profession')}/${url}`),
      (snapshot) => {
        const value: TData = snapshot.val();

        if (value) {
          return resolve(value);
        } else {
          reject(
            new Error(
              `Value (${value}) from Firebase Database not found. Check url (${url})`,
            ),
          );
        }
      },
    );
  });
};

export { getDataFromDB };
