import { ref, update } from 'firebase/database';

import db from '../../../config/firebase/firebaseConfig';
import { penaltyPoints } from '../../../constants/constants';

const sendDbPenaltyPoints = () => {
  try {
    const idUser = localStorage.getItem('idUser');
    const referenceUserAnswers = ref(db, `users/user${idUser}/userInfo`);
    update(referenceUserAnswers, {
      penaltyPoints: penaltyPoints,
    });
  } catch (error) {
    console.error(error);
  }
};

export { sendDbPenaltyPoints };
