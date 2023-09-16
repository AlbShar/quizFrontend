import { useSelector } from 'react-redux';

import Spinner from '../UI/Spinner/Spinner';
import ErrorMessage from '../UI/ErrorMessage/ErroMessage';

import { RootState } from '../app/store';

const LoadingStatusComponent = () => {
  const userAnswersLoadingStatus = useSelector(
    (state: RootState) => state.userAnswersReducer.userAnswersLoadingStatus,
  );
  if (userAnswersLoadingStatus === 'loading') {
    return (
      <Spinner width={50} height={50} color={'#1f2ce0'} margin={'0 auto'} />
    );
  } else if (userAnswersLoadingStatus === 'error') {
    return <ErrorMessage />;
  } else {
    return <></>
  }
};

export default LoadingStatusComponent;
