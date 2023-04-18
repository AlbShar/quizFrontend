import { ref, update } from "firebase/database";

import db from "../../../config/firebase/firebaseConfig";

const sendDbTimeLeft = (time: number) => {
    try {
      const idUser = localStorage.getItem("idUser"); 
      const referenceUserAnswers = ref(db, `users/user${idUser}/userInfo`);
      update(referenceUserAnswers, {
        time,
      });
    } catch (error) {
      console.error(error);
    }
  };

  export {sendDbTimeLeft};