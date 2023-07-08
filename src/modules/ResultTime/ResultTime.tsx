import { useEffect, useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';

import {
  StyledH2,
  StyledH3,
  StyledArticle,
} from '../ResultTime/ResultTime.Styled';
import Spinner from '../../UI/Spinner/Spinner';

import { getUserInfo } from './api/getUserInfo';
import { transformSecondsToMinutes } from './helpers/transformSecondsToMinutes';
import ErrorMessage from '../../UI/ErrorMessage/ErroMessage';
import { ContextIdUser } from '../../components/Context';

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

  const timeHasLoaded = (userInfo: TUserInfoDB) => {
    const { time } = userInfo;
    setState((state) => ({ ...state, loading: false, time }));
  };

  const view = () => {
    return (
      <StyledArticle>
        <StyledH3>{t('Затраченное_время')}</StyledH3>
        <StyledH2>
          {transformSecondsToMinutes(state.time, t('сек'), t('мин'))}
        </StyledH2>
      </StyledArticle>
    );
  };
  const spinner = state.loading ? (
    <Spinner width={50} height={50} color={'#1f2ce0'} margin='0 auto' />
  ) : (
    false
  );
  const error = state.error ? <ErrorMessage /> : false;
  const content = !(state.loading || state.error) ? view() : false;

  const onError = (error: any): never => {
    setState((state) => ({ ...state, loading: false, error: true }));
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
