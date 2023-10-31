import { ref } from 'firebase/database';
import { onValue } from 'firebase/database';

import db from '../config/firebase/firebaseConfig';

export const fetchData = async <TData>(url: string) => {
  try {
    const response = new Promise((resolve, reject) => {
      onValue(ref(db, url), (snapshot) => {
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
      });
    });

    return response;
  } catch (e) {
    console.error(e);
  }
};
