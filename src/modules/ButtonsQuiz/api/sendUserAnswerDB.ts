import { ref, set } from 'firebase/database';

import db from '../../../config/firebase/firebaseConfig';
import { quiantityPause } from '../../../helpers/incrementQuantityPause';

import { getRightAnswerDB } from './getRightAnswerDB';

type UserAnswerProps = {
  currentQuestionNumb: number;
  selectorQuestion: '#questionTitle';
  userAnswer: string;
  selectorTheme: '#themeQuestion';
  idUser: string;
}

const sendUserAnswerDB = async ({
  currentQuestionNumb,
  selectorQuestion,
  userAnswer,
  selectorTheme,
  idUser,
}: UserAnswerProps): Promise<void> => {
  const theme =
    document.querySelector<HTMLSpanElement>(selectorTheme)?.textContent;
  const question =
    document.querySelector<HTMLHeadingElement>(selectorQuestion)?.textContent;
  const rightAnswer = await getRightAnswerDB(currentQuestionNumb);

  try {
    const referenceUserAnswers = ref(
      db,
      `users/user${idUser}/answers/answer${currentQuestionNumb}`,
    );
    set(referenceUserAnswers, {
      question: question,
      userAnswer: userAnswer,
      theme: theme,
      point: rightAnswer === userAnswer ? 1 : 0,
      quantityPause: quiantityPause,
    });
  } catch (error) {
    if (!theme) {
      throw new Error(`The value of variable 'theme' is ${theme}. ${error}`);
    } else if (!question) {
      throw new Error(
        `The value of variable 'question' is ${question}. ${error}`,
      );
    } else {
      throw new Error(`Unknown mistake: ${error}`);
    }
  }
};

export { sendUserAnswerDB };
