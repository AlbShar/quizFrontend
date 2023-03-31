import { ref, update } from "firebase/database";
import db from "../../../config/firebase/firebaseConfig";

const setPenaltyPoints = () => {
    try {
      let idUser = localStorage.getItem("idUser"); 
      const referenceUserAnswers = ref(db, `users/user${idUser}/userInfo`);
      update(referenceUserAnswers, {
        penaltyPoints: 3,
      });
    } catch (error) {
      console.error(error);
    }
  };

  export {setPenaltyPoints};