import { useEffect, useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';

import {
  StyledH2,
  StyledH3,
  StyledArticle,
} from '../ResultTime/ResultTime.Styled';
import Spinner from '../../UI/Spinner/Spinner';
import ErrorMessage from '../../UI/ErrorMessage/ErroMessage';
import { ContextIdUser } from '../../components/Context';

import { getUserInfo } from './api/getUserInfo';
import { transformSecondsToMinutes } from './helpers/transformSecondsToMinutes';


const ResultTime = (): JSX.Element => {
  const { t } = useTranslation();
  const [idUser]: [string, (lang: string) => void] = useContext(ContextIdUser);
  type TState = {
    loading: boolean;
    error: boolean;
    time: number | false | null;
  };

  type TUserInfoDB = {
    name: string;
    email: string;
    quiantityPause: number;
    time: number;
  };

  const [state, setState] = useState<TState>({
    loading: true,
    error: false,
    time: 0,
  });

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [time, setTime] = useState<number>(0);
  const [isError, setIsError] = useState<boolean>(false);

  const timeHasLoaded = (userInfo: TUserInfoDB) => {
    const { time } = userInfo;
    setIsLoading(false);
    setTime(time);
  };

  const view = () => {
    return (
      <StyledArticle>
        <StyledH3>{t('Затраченное_время')}</StyledH3>
        <StyledH2>
          {transformSecondsToMinutes(time, t('сек'), t('мин'))}
        </StyledH2>
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

  const onError = (error: any): never => {
    setIsLoading(false);
    setIsError(true);
    throw new Error(error);
  };

  useEffect(() => {
    getUserInfo(idUser).then(timeHasLoaded).catch(onError);
  }, []);

  return (
    <>
      {spinner} {error} {content}
    </>
  );
};

export default ResultTime;
