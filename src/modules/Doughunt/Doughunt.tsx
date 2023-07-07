import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { getTotalQuestionsNumb } from '../../api/getTotalQuestionsNumb';
import ChartDoughnut from '../../components/ChartDoughnut/ChartDoughnut';
import Spinner from '../../UI/Spinner/Spinner';

import {
  StyledArticle,
  StyledP,
  StyledSpan,
  StyledDoughuntWrapper,
} from './Doughunt.Styled';

type DoughnutProps = {
  rightAnswers: number;
};

const Doughnut = ({ rightAnswers }: DoughnutProps): JSX.Element => {
  const { t } = useTranslation();

  const [totalQuestionNumbers, setTotalQuestionNumbers] = useState<number>(0);
  const percentRightQuestions = +(
    (100 * rightAnswers) /
    totalQuestionNumbers
  ).toFixed(1);
  const percentWrongQuestions = +(100 - percentRightQuestions).toFixed(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const view = () => {
    return (
      <StyledArticle>
        <StyledDoughuntWrapper>
          <ChartDoughnut
            dataPieChart={[percentRightQuestions, percentWrongQuestions]}
          />
          <StyledSpan>{`${percentRightQuestions} %`}</StyledSpan>
        </StyledDoughuntWrapper>
        <StyledP>{t('Подпись_круговая_диаграмма')}</StyledP>
      </StyledArticle>
    );
  };
  const spinner = isLoading ? (
    <Spinner width={50} height={50} color={'#1f2ce0'} margin='0 auto' />
  ) : null;
  const content = !isLoading ? view() : null;

  const setQuestionsNumber = async () => {
    const url = 'questions';
    const questionsNumber = await getTotalQuestionsNumb(url);
    setTotalQuestionNumbers(questionsNumber as number);
    setIsLoading(false);
  };

  useEffect(() => {
    setQuestionsNumber();
  }, []);

  return (
    <>
      {spinner} {content}
    </>
  );
};

export default Doughnut;
