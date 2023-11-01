import { useContext, useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { getAllTestedUsers } from '../api/getAllTestedUsers';
import { ContextProfession } from 'components/context';

export const useGetTotalTestedUsers = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [totalTestedUsers, setTotalTestedUsers] = useState(0);
  const location = useLocation();
  const [isHomePage, setIsHomePage] = useState(
    location.pathname === '/' ? true : false,
  );
  const [profession] = useContext(ContextProfession);

  const dataHasLoaded = (res: number) => {
    setIsLoading(false);
    setTotalTestedUsers(res);
  };

  const onErrorHandler = (error) => {
    setIsLoading(false);
    setIsError(true);
    throw new Error(error.message);
  };

  useEffect(() => {
    if (profession && !isHomePage) {
      const url = `${profession}/users`;
      getAllTestedUsers(url).then(dataHasLoaded).catch(onErrorHandler);
    } else {
      setIsLoading(false);
    }
  }, [profession, isHomePage]);

  return { isError, isLoading, totalTestedUsers };
};
