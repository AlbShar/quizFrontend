import { update } from 'firebase/database';
import { ref } from 'firebase/database';

import db from '../../../config/firebase/firebaseConfig';

interface IUserData {
  name: string | 'User';
  email: string | 'No email';
}

const sendUserInfoDB = async (
  idUser: string,
  userName: string,
  userEmail: string,
) => {
  try {
    const referenceUserAnswers = ref(db, `users/user${idUser}/userInfo`);
    update(referenceUserAnswers, {
      name: userName,
      email: userEmail,
    } as IUserData);
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`${error.message}`);
    } else {
      throw new Error(`Unknown error caught: ${error}`);
    }
  }
};

export { sendUserInfoDB };
