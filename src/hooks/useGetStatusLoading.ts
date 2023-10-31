import { useSelector } from 'react-redux';

import { RootState } from '../app/store';

export const useGetStatusLoading = () => {
  const userAnswersLoadingStatus = useSelector(
    (state: RootState) => state.userAnswersLoadingStatus,
  );
  return userAnswersLoadingStatus;
};
