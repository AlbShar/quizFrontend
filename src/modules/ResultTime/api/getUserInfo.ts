import { ref } from 'firebase/database';
import { onValue } from 'firebase/database';

import db from '../../../config/firebase/firebaseConfig';

type TUserInfoDB = {
  name: string;
  email: string;
  quiantityPause: number;
  time: number;
};

const getUserInfo = (idUser: string) => {
  return new Promise<TUserInfoDB>(function (resolve, reject) {
    onValue(ref(db, `users/user${idUser}/userInfo`), (snapshot) => {
      resolve(snapshot.val());
    });
  });
};

export { getUserInfo };
