import { useSelector } from 'react-redux';

import { RootState } from '../app/store';

const useDataLoaded = () => {
  const userAnswersLoadingStatus = useSelector(
    (state: RootState) => state.userAnswersReducer.userAnswersLoadingStatus,
  );
  return userAnswersLoadingStatus === 'success' ? true : false;
};

export default useDataLoaded;
