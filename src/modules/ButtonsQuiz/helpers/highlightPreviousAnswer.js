import { ref, onValue } from "firebase/database";
import db from "../../../config/firebase/firebaseConfig";

const highlightPreviousAnswer = (
    idUser,
    currentQuestionNumb,
    selectorAnswers
  ) => {
    onValue(
      ref(db, `users/user${idUser}/answers/answer${currentQuestionNumb}`),
      (snapshot) => {
        setTimeout(() => {
          document.querySelectorAll(selectorAnswers).forEach((answerItem) => {
            if (answerItem.textContent === snapshot.val().userAnswer) {
              answerItem.style.border = "2px solid rgb(103, 104, 215)";
              answerItem.setAttribute("data-useranswer", true);
            }
          });
        }, 1);
      },
      {
        onlyOnce: true,
      }
    );
  };

  export {highlightPreviousAnswer};