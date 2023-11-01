import { ErrorMessage } from 'UI/errorMessage';

import SkeletonQuestion from '../UI/skeletonQuestion';
import { useGetTestTask } from '../hooks/useGetTestTask';

import { ViewTestTask } from './viewTestTask';

const TestTask = () => {
  const { isLoading, isError, ...dataTestTask } = useGetTestTask();

  const error = isError ? <ErrorMessage /> : null;
  const spinner = isLoading ? <SkeletonQuestion /> : null;
  const content = !(isLoading || isError) ? (
    <ViewTestTask {...dataTestTask} />
  ) : null;

  return (
    <>
      {spinner} {content} {error}
    </>
  );
};

export default TestTask;
