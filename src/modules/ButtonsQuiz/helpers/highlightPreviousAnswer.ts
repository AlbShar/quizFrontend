import { ref, onValue } from 'firebase/database';

import db from '../../../config/firebase/firebaseConfig';

type highlightPreviousAnswerProps = {
  idUser: string;
  currentQuestionNumb: number;
  selectorAnswers: string;
}
const highlightPreviousAnswer = ({
  idUser,
  currentQuestionNumb,
  selectorAnswers,
}: highlightPreviousAnswerProps): void => {
  const refer = `users/user${idUser}/answers/answer${currentQuestionNumb - 1}`;
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
                answerItem.style.backgroundColor = '#B7B7FF';
                answerItem.setAttribute('data-useranswer', 'true');
              }
            });
        }, 10);
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
