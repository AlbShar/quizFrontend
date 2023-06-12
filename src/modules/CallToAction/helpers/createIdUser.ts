import { push } from 'firebase/database';
import { ref } from 'firebase/database';

import db from '../../../config/firebase/firebaseConfig';

export const createIdUser = () => {
  const pushedRef = push(ref(db, 'users/user'));
  if (pushedRef && pushedRef.key) {
    const idUser = pushedRef.key;
    localStorage.setItem('idUser', idUser);
  }
};
