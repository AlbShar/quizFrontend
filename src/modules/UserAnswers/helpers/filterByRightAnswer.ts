import type { TInfoQuestionsAndAnswers } from '../types/types';

const filterByRightAnswer = (
  data: TInfoQuestionsAndAnswers,
  typeAnswer: string,
) => {
  const transformData = Object.values(data);

  switch (typeAnswer) {
    case 'Верно':
      return transformData.filter(
        (question) => question?.userAnswer?.point === 1,
      );
    case 'Неверно':
      return transformData.filter(
        (question) => question?.userAnswer?.point === 0,
      );
    default:
      return transformData;
  }
};

export default filterByRightAnswer;
