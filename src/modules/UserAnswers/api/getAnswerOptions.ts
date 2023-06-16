import { ref } from 'firebase/database';
import { onValue } from 'firebase/database';

import db from '../../../config/firebase/firebaseConfig';

const getAnswerOptions = async () => {
  return await new Promise(function (resolve, reject) {
    onValue(ref(db, 'answers'), (snapshot) => {
      if (snapshot.val()) {
        resolve(snapshot.val());
      } else {
        reject();
      }
    });
  });
};

export { getAnswerOptions };
