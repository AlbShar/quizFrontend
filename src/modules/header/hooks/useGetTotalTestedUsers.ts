import { useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { ContextProfession } from 'components/context';

import { getAllTestedUsers } from '../api/getAllTestedUsers';

export const useGetTotalTestedUsers = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [totalTestedUsers, setTotalTestedUsers] = useState(0);
    const location = useLocation();
    const [isHomePage, setIsHomePage] = useState(location.pathname !== '/');

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
    if (profession) {
      const url = `${profession}/users`;
      getAllTestedUsers(url).then(dataHasLoaded).catch(onErrorHandler);
    } else {
      setIsLoading(false);
    }
  }, [profession]);

    useEffect(() => {
      setIsHomePage(location.pathname !== '/');
    }, [location.pathname]);


  return { isError, isLoading, totalTestedUsers, isHomePage };
};
