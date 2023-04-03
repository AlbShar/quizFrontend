import { ref, update } from "firebase/database";
import db from "../../../config/firebase/firebaseConfig";
import { penaltyPoints } from "../../../variables/variables";

const setPenaltyPoints = () => {
    try {
      let idUser = localStorage.getItem("idUser"); 
      const referenceUserAnswers = ref(db, `users/user${idUser}/userInfo`);
      update(referenceUserAnswers, {
        penaltyPoints: penaltyPoints,
      });
    } catch (error) {
      console.error(error);
    }
  };

  export {setPenaltyPoints};