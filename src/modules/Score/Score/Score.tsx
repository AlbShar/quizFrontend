import { useEffect, useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';

import Spinner from '../../../UI/Spinner/Spinner';
import { getTotalQuestionsNumb } from '../../../api/getTotalQuestionsNumb';
import ErrorMessage from '../../../UI/ErrorMessage/ErroMessage';
import { ContextIdUser, ContextProfession } from '../../../components/Context';
import { getUserAnswers } from '../api/getUserAnswers';
import { getTotalPoints } from '../helpers/getTotalPoints';
import { answersTransform } from '../helpers/answersTransform';

import { StyledH2, StyledH3, StyledArticle } from './Score.Styled';

import type { TPoints } from '../types';



type FinalResultProps = {
  setRightAnswers: (points: number) => void;
};

const Score = ({ setRightAnswers }: FinalResultProps): JSX.Element => {
  const { t } = useTranslation();
  const [idUser]: [string, (lang: string) => void] = useContext(ContextIdUser);
  const [profession]: [string, (lang: string) => void] =
        useContext(ContextProfession);


  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [totalQuestionNumbers, setTotalQuestionNumbers] = useState<number>(0);
  const [points, setPoints] = useState<number>(0);


  const dataHasLoaded = (data: any) => {
    type TdataInfo = {
      points: TPoints | null;
      totalQuestionNumbers: number;
    };

    const dataInfo: TdataInfo = {
      points: null,
      totalQuestionNumbers: 0,
    };

    const [totalQuestionNumbers, answers] = data;

    dataInfo.points = answersTransform(answers.value);
    dataInfo.totalQuestionNumbers = totalQuestionNumbers.value
      ? totalQuestionNumbers.value
      : totalQuestionNumbers.value === false
      ? false
      : null;

    setIsLoading(false);
    setPoints(getTotalPoints(dataInfo.points as TPoints));
    setTotalQuestionNumbers(dataInfo.totalQuestionNumbers as number);

    setRightAnswers(getTotalPoints(dataInfo.points as TPoints));

    for (const key in dataInfo) {
      if (dataInfo[key] === null) {
        throw new Error(
          `The value of ${key} is ${dataInfo[key]} in ${dataInfo}`,
        );
      }
    }
  };

  const onError = (error: any): never => {
    setIsError(true);
    setIsLoading(false);
    throw new Error(error);
  };

  useEffect(() => {
    const url1 = `${profession}/questions`;
    const url2 = `${profession}/users/user${idUser}/answers`;

    Promise.allSettled([getTotalQuestionsNumb(url1), getUserAnswers(url2)])
      .then(dataHasLoaded)
      .catch(onError);
  }, []);

  const view = () => {
    return (
      <StyledArticle>
        <StyledH3>{t('Ваш_результат')}</StyledH3>
        <StyledH2>{`${points} ${t('из')} ${totalQuestionNumbers}`}</StyledH2>
      </StyledArticle>
    );
  };

  const spinner = isLoading ? (
    <Spinner width={50} height={50} color={'#1f2ce0'} margin='0 auto' />
  ) : (
    false
  );
  const error = isError ? <ErrorMessage /> : false;
  const content = !(isLoading || isError) ? view() : false;

  return (
    <>
      {spinner} {error} {content}
    </>
  );
};

export default Score;
