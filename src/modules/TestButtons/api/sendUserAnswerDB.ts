import { ref, set } from 'firebase/database';

import db from '../../../config/firebase/firebaseConfig';
import { getValueFromLocalStorage } from '../../../helpers/getValueFromLocalStorage';
import { getRightAnswerDB } from './getRightAnswerDB';

type UserAnswerProps = {
  userAnswer: string;
  idUser: string;
  currentQuestionNumb: number;
  lang: string;
};

const sendUserAnswerDB = async ({
  userAnswer,
  idUser,
  currentQuestionNumb,
  lang,
}: UserAnswerProps): Promise<void> => {
  const questionName =
    document.querySelector<HTMLHeadingElement>('#questionTitle')?.textContent;
  const themeName =
    document.querySelector<HTMLHeadingElement>('#themeQuestion')?.textContent;
  const profession = getValueFromLocalStorage('profession');
  const url = `${profession}/users/user${idUser}/answers/answer${currentQuestionNumb}`;

  try {
    const rightAnswer = await getRightAnswerDB(currentQuestionNumb, lang);
    const isRigthAnswer = rightAnswer === userAnswer ? 1 : 0;

    set(ref(db, url), {
      question: questionName,
      userAnswer: userAnswer,
      point: isRigthAnswer,
      theme: themeName,
    });
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export { sendUserAnswerDB };
