import { useState } from 'react';
import { useEffect } from 'react';

import { getValueFromLocalStorage } from 'helpers/getValueFromLocalStorage';

import { getAllTestedUsers } from '../api/getAllTestedUsers';

export const useGetTotalTestedUsers = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [totalTestedUsers, setTotalTestedUsers] = useState(0);
    const profession = getValueFromLocalStorage('profession');


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

    return { isError, isLoading, totalTestedUsers };
};
