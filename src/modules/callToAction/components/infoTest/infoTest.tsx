import { Spinner } from 'UI/spinner';
import { ErrorMessage } from 'UI/errorMessage';

import { useFetchTestInfo } from '../../hooks/useFetchTestInfo';

import { ViewInfoTest } from './viewInfoTest';
import { StyledUl } from './infoTest.styled';

type InfoTestProps = {
  isChooseProfession: boolean;
  setChooseProfession: (item: boolean) => void;
};

const InfoTest = ({
  isChooseProfession,
  setChooseProfession,
}: InfoTestProps) => {
  const { isLoading, isError, quantityQuestions, quantityThemes } =  useFetchTestInfo();

  const content = !(isLoading || isError) ? (
    <ViewInfoTest
      isChooseProfession={isChooseProfession}
      quantityQuestions={quantityQuestions}
      quantityThemes={quantityThemes}
    />
  ) : null;
  const spinner = isLoading ? (
    <Spinner width={50} height={50} color='#fcfdff' margin='auto' />
  ) : null;
  const error = isError ? <ErrorMessage /> : null;

  return (
    <nav>
      <StyledUl>
        {content} {spinner} {error}
      </StyledUl>
    </nav>
  );
};

export default InfoTest;
