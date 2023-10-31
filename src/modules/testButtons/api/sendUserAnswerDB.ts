import { ref, set } from 'firebase/database';

import db from 'config/firebase/firebaseConfig';

import { getRightAnswerDB } from './getRightAnswerDB';
import { fetchQuestionInfo } from './fetchQuestionInfo';

type UserAnswerProps = {
  userAnswer: string;
  idUser: string;
  currentQuestionNumb: number;
  lang: string;
  profession: string
};

const sendUserAnswerDB = async ({
  userAnswer,
  idUser,
  currentQuestionNumb,
  lang,
  profession,
}: UserAnswerProps): Promise<void> => {
  try {
    const { name, theme } = await fetchQuestionInfo(
      `${profession}/questions/question${currentQuestionNumb}/${lang}`,
    );
    const url = `${profession}/users/user${idUser}/answers/answer${currentQuestionNumb}`;

    const rightAnswer = await getRightAnswerDB(
      profession,
      currentQuestionNumb,
      lang,
    );
    const isRigthAnswer = rightAnswer === userAnswer ? 1 : 0;
    set(ref(db, url), {
      question: name,
      userAnswer: userAnswer,
      point: isRigthAnswer,
      theme: theme,
    });
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export { sendUserAnswerDB };
