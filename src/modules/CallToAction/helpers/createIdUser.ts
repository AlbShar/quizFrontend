import { push } from 'firebase/database';
import { ref } from 'firebase/database';

import db from '../../../config/firebase/firebaseConfig';

const createIdUser = (): string => {

  const pushedRef = push(ref(db, 'users/user'));

  if (pushedRef && pushedRef.key) {
    const idUser = pushedRef.key;
    return idUser;
  } else {
    return ''
  }
};

export {createIdUser};
