import { ref, update } from 'firebase/database';

import db from '../../../config/firebase/firebaseConfig';

const sendTimeToDB = (time: number, url: string) => {
  try {
    update(ref(db, url), {
      time,
    });
  } catch (error) {
    console.error(error);
  }
};

export { sendTimeToDB };
