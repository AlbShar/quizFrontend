import { ref } from 'firebase/database';
import { onValue } from 'firebase/database';

import { getIdUser } from '../../../helpers/getIdUser';
import db from '../../../config/firebase/firebaseConfig';

type TUserInfoDB = {
  name: string;
  email: string;
  quiantityPause: number;
  time: number;
};

const getUserInfo = () => {
  return new Promise<TUserInfoDB>(function (resolve, reject) {
    onValue(
      ref(db, `users/user${getIdUser('idUser')}/userInfo`),
      (snapshot) => {
        resolve(snapshot.val());
      },
    );
  });
};

export { getUserInfo };
