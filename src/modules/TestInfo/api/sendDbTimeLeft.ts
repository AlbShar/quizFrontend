import { ref, update } from 'firebase/database';

import db from '../../../config/firebase/firebaseConfig';

const sendDbTimeLeft = (time: number, idUser: string) => {
  try {
    const referenceUserAnswers = ref(db, `users/user${idUser}/userInfo`);
    update(referenceUserAnswers, {
      time,
    });
  } catch (error) {
    console.error(error);
  }
};

export { sendDbTimeLeft };
