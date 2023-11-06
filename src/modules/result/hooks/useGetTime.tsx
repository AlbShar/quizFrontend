import { useContext, useState, useEffect } from 'react';

import { ContextIdUser, ContextProfession } from 'components/context';

import { getSpentTime } from '../api/getSpentTime';

import type { TUserInfoDB } from '../types';

export const useGetTime = () => {
  const [idUser]: [string, (lang: string) => void] = useContext(ContextIdUser);
  const [profession]: [string, (lang: string) => void] =
    useContext(ContextProfession);

  const [isLoading, setIsLoading] = useState(true);
  const [time, setTime] = useState(0);
  const [isError, setIsError] = useState(false);

  const onError = (error): never => {
    setIsLoading(false);
    setIsError(true);
    throw new Error(error);
  };

  const timeHasLoaded = (userInfo: TUserInfoDB) => {
    const { time } = userInfo;
    setIsLoading(false);
    setTime(time);
  };

  useEffect(() => {
    const url = `${profession}/users/user${idUser}/userInfo`;
    getSpentTime(url).then(timeHasLoaded).catch(onError);
    // eslint-disable-next-line
  }, []);

  return { isError, isLoading, time };
};
