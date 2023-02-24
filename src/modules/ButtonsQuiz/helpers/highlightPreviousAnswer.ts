import { ref, onValue } from "firebase/database";
import db from "../../../config/firebase/firebaseConfig";

const highlightPreviousAnswer = (
    idUser: string,
    currentQuestionNumb: number,
    selectorAnswers: string
  ) => {
    onValue(
      ref(db, `users/user${idUser}/answers/answer${currentQuestionNumb}`),
      (snapshot) => {
        setTimeout(() => {
          document.querySelectorAll<HTMLLIElement>(selectorAnswers).forEach((answerItem) => {
            if (answerItem.textContent === snapshot.val().userAnswer) {
              answerItem.style.border = "2px solid rgb(103, 104, 215)";
              answerItem.setAttribute("data-useranswer", 'true');
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