import { ref } from "firebase/database";
import { onValue } from "firebase/database";

import { getIdUser } from "../../../helpers/getIdUser";
import db from "../../../config/firebase/firebaseConfig";

const getUserAnswers = () => {
    return new Promise<any>(function (resolve, reject) {
      onValue(ref(db, `users/user${getIdUser("idUser")}/answers`), (snapshot) => {
        resolve(snapshot.val());
      });
    });
  };

  export {getUserAnswers};