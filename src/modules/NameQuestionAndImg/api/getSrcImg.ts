import { ref } from "firebase/database";
import { onValue } from "firebase/database";
import db from "../../../config/firebase/firebaseConfig";

const getSrcImg = async (currentQuestionNumb: number) => {
    try {
      return await new Promise<string>(function (resolve, reject) {
        onValue(
          ref(db, `questions/question${currentQuestionNumb}/img`),
          (snapshot) => {
            const srcImg = snapshot.val();
            resolve(srcImg);
          }
        );
      });
    } catch (error: unknown) {
      console.error(error);
    }
  };

  export {getSrcImg};