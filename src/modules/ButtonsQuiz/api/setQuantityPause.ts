import { ref, set } from "firebase/database";
import db from "../../../config/firebase/firebaseConfig";
import { quiantityPause } from "../../../helpers/incrementQuantityPause";

const setQunatityPause = () => {
    try {
        debugger
      const idUser = localStorage.getItem("idUser"); 
      const referenceUserAnswers = ref(db, `users/user${idUser}/userInfo`);
      set(referenceUserAnswers, {
        quiantityPause: quiantityPause,
      });
    } catch (error) {
      console.error(error);
    }
  };

  export {setQunatityPause};