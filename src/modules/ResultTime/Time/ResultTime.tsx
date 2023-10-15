import { useEffect, useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import {Spinner} from 'UI/Spinner/Spinner';
import {ErrorMessage} from 'UI/ErrorMessage/ErrorMessage';
import { ContextIdUser, ContextProfession } from 'components/Context';

import { getUserInfo } from '../api/getUserInfo';
import { transformSecondsToMinutes } from '../helpers/transformSecondsToMinutes';

import {
  StyledH2,
  StyledH3,
  StyledArticle,
} from './ResultTime.Styled';


const ResultTime = (): JSX.Element => {
  const { t } = useTranslation('', {
    keyPrefix: 'modules.resultTime',
  });
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
    const [profession]: [string, (lang: string) => void] =
      useContext(ContextProfession);


  const timeHasLoaded = (userInfo: TUserInfoDB) => {
    const { time } = userInfo;
    setIsLoading(false);
    setTime(time);
  };

  const view = () => {
    return (
      <StyledArticle>
        <StyledH3>{t('title')}</StyledH3>
        <StyledH2>
          {transformSecondsToMinutes(time, t('sec'), t('min'))}
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
      const url = `${profession}/users/user${idUser}/userInfo`;
      getUserInfo(url).then(timeHasLoaded).catch(onError);
  }, []);

  return (
    <>
      {spinner} {error} {content}
    </>
  );
};

export default ResultTime;
