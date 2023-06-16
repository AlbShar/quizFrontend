import { ref, onValue } from 'firebase/database';

import db from '../../../config/firebase/firebaseConfig';

interface IPreviousAnswer {
  idUser: string;
  currentQuestionNumb: number;
  selectorAnswers: string;
}
const highlightPreviousAnswer = ({
  idUser,
  currentQuestionNumb,
  selectorAnswers,
}: IPreviousAnswer) => {
  const refer = `users/user${idUser}/answers/answer${currentQuestionNumb}`;
  let userAnswerDb = '';
  try {
    onValue(
      ref(db, refer),
      (snapshot) => {
        setTimeout(() => {
          document
            .querySelectorAll<HTMLLIElement>(selectorAnswers)
            .forEach((answerItem) => {
              userAnswerDb = snapshot.val().userAnswer;
              if (answerItem.textContent === userAnswerDb) {
                answerItem.style.border = '2px solid rgb(103, 104, 215)';
                answerItem.setAttribute('data-useranswer', 'true');
              }
            });
        }, 1);
      },
      {
        onlyOnce: true,
      },
    );
  } catch (error) {
    if (!userAnswerDb) {
      throw new Error(
        `The value of variable 'userAnswerDb' is ${userAnswerDb}. ${error}`,
      );
    }
    throw new Error(`Unknown mistake: ${error}`);
  }
};

export { highlightPreviousAnswer };
