import { ref } from 'firebase/database';
import { onValue } from 'firebase/database';

import { getValueFromLocalStorage } from 'helpers/getValueFromLocalStorage';
import db from 'config/firebase/firebaseConfig';

const getAnswerOptions = async () => {
  const profession = getValueFromLocalStorage('profession');
  return await new Promise(function (resolve, reject) {
    onValue(ref(db, `${profession}/answers`), (snapshot) => {
      if (snapshot.val()) {
        resolve(snapshot.val());
      } else {
        reject();
      }
    });
  });
};

export { getAnswerOptions };
