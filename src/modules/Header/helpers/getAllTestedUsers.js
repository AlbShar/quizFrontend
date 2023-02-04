import { ref } from "firebase/database";
import { onValue } from "firebase/database";
import db from "../../../config/firebase/firebaseConfig";

const getAllTestedUsers = () => {
    return new Promise(function (resolve, reject) {
      onValue(ref(db, `users`), (snapshot) => {
        const AllTestedUsers = Object.entries(snapshot.val()).length;
        resolve(AllTestedUsers);
      });
    });
  };

  export {getAllTestedUsers}