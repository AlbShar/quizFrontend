import { ref, set } from 'firebase/database';

import db from '../../../config/firebase/firebaseConfig';

import { getRightAnswerDB } from './getRightAnswerDB';

type UserAnswerProps = {
  currentQuestionNumb: number;
  selectorQuestion: '#questionTitle';
  userAnswer: string;
  selectorTheme: '#themeQuestion';
  idUser: string;
  lang: string;
}

const sendUserAnswerDB = async ({
  currentQuestionNumb,
  selectorQuestion,
  userAnswer,
  selectorTheme,
  idUser,
  lang
}: UserAnswerProps): Promise<void> => {
  const theme =
    document.querySelector<HTMLSpanElement>(selectorTheme)?.textContent;
  const question =
    document.querySelector<HTMLHeadingElement>(selectorQuestion)?.textContent;

  const refer = `users/user${idUser}/answers/answer${currentQuestionNumb}`;
  const rightAnswer = await getRightAnswerDB(currentQuestionNumb, lang);
  const isRigthAnswer = rightAnswer === userAnswer ? 1 : 0;

  try {
    if (!theme || !question || !isRigthAnswer) {
      throw new Error(`There is no data information about question`);
    }

    set(ref(db, refer), {
      question: question,
      userAnswer: userAnswer,
      theme: theme,
      point: isRigthAnswer,
    });
  } catch (e: unknown) {
    if (e instanceof Error) {
      throw new Error(e.message);
    } else {
      throw new Error(`Unknown mistake: ${e}`);
    }
  }
};

export { sendUserAnswerDB };
