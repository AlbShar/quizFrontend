import { ref } from "firebase/database";
import { onValue } from "firebase/database";
import {db} from "../index"


const getTotalQuestionsNumb = async () => {
    try {
      return await new Promise(function (resolve, reject) {
        onValue(ref(db, `questions`), (snapshot) => {
          const totalQuestionsNumb = Object.entries(snapshot.val()).length;
          resolve(totalQuestionsNumb);
        });
      });
    } catch (error) {
      console.error(error);
    }
  };

  export {getTotalQuestionsNumb}