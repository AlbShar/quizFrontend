import { useState, useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  LinearScale,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import { getTotalQuestionsNumb } from '../../api/getTotalQuestionsNumb';
import Spinner from '../../UI/Spinner/Spinner';
import { ContextProfession } from '../Context';

import {
  StyledArticle,
  StyledP,
  StyledSpan,
  StyledDoughuntWrapper,
} from './DoughuntChart.Styled';

ChartJS.register(ArcElement, Tooltip, Legend, LinearScale);

type DoughnutProps = {
  rightAnswers: number;
};

const DoughnutChart = ({ rightAnswers }: DoughnutProps): JSX.Element => {
  const { t } = useTranslation();

  const [totalQuestionNumbers, setTotalQuestionNumbers] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
    const [profession, ]: [string, (lang: string) => void] =
      useContext(ContextProfession);

  

  const percentRightQuestions = +(
    (100 * rightAnswers) /
    totalQuestionNumbers
  ).toFixed(1);
  const percentWrongQuestions = +(100 - percentRightQuestions).toFixed(1);

  const data = {
    labels: ['Верно', 'Неверно'],
    datasets: [
      {
        label: '%',
        data: [percentRightQuestions, percentWrongQuestions],
        backgroundColor: ['green', 'red'],
        borderColor: ['green', 'red'],
        cutout: '75%',
        borderWidth: 1,
      },
    ],
  };

  const spinner = isLoading ? (
    <Spinner width={50} height={50} color={'#1f2ce0'} margin='0 auto' />
  ) : null;
  
  const view = () => {
    return (
      <StyledArticle>
        <StyledDoughuntWrapper>
          <Doughnut data={data}></Doughnut>
          <StyledSpan>{`${percentRightQuestions} %`}</StyledSpan>
        </StyledDoughuntWrapper>
        <StyledP>{t('Подпись_круговая_диаграмма')}</StyledP>
      </StyledArticle>
    );
  };
  const content = !isLoading ? view() : null;

  const setQuestionsNumber = async () => {
    const url = `${profession}/questions`;
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

export default DoughnutChart;
