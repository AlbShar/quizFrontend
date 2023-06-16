import { RefObject } from 'react';

import { getNameQuestion } from '../api/getNameQuestion';

interface INameQuestionQuiz {
  currentQuestionNumb: number;
  questionTitleRef: RefObject<HTMLHeadingElement>;
}
const insertNameQuestionQuiz = async ({
  currentQuestionNumb,
  questionTitleRef,
}: INameQuestionQuiz) => {
  try {
    const nameQuestion = await getNameQuestion(currentQuestionNumb);
    const elementQuestion = questionTitleRef.current;
    if (elementQuestion && nameQuestion) {
      elementQuestion.textContent = nameQuestion;
    }
  } catch (error) {
    console.error(error);
  }
};

export { insertNameQuestionQuiz };
