import { ref } from 'firebase/database';
import { onValue } from 'firebase/database';

import db from 'config/firebase/firebaseConfig';
import { getValueFromLocalStorage } from 'helpers/getValueFromLocalStorage';

const getInfoQuestions = async () => {
  const profession = getValueFromLocalStorage('profession');

  return await new Promise(function (resolve, reject) {
    onValue(ref(db, `${profession}/questions`), (snapshot) => {
      if (snapshot.val()) {
        resolve(snapshot.val());
      } else {
        reject();
      }
    });
  });
};

export { getInfoQuestions };
