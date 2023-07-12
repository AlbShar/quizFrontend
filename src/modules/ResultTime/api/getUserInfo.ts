import { ref } from 'firebase/database';
import { onValue } from 'firebase/database';

import db from '../../../config/firebase/firebaseConfig';

import { getValueFromLocalStorage } from '../../../helpers/getValueFromLocalStorage';

type TUserInfoDB = {
  name: string;
  email: string;
  quiantityPause: number;
  time: number;
};

const getUserInfo = (idUser: string) => {
  const profession = getValueFromLocalStorage('profession');
  return new Promise<TUserInfoDB>(function (resolve, reject) {
    onValue(
      ref(db, `${profession}/users/user${idUser}/userInfo`),
      (snapshot) => {
        resolve(snapshot.val());
      },
    );
  });
};

export { getUserInfo };
