import { useRef,  } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

import {ErrorMessage} from 'UI/errorMessage';
import {Spinner} from 'UI/spinner';
import {
  StyledSpanText,
  StyledSpanNumber,
  StyledDivWrapper,
} from 'modules/header/components/totalTested/totalTested.styled';
import { useGetTotalTestedUsers } from 'modules/header/hooks/useGetTotalTestedUsers';


type TotalTestedProps = {
  isChooseProfession: boolean;
};

const TotalTested = ({ isChooseProfession }: TotalTestedProps): JSX.Element => {
  const { t } = useTranslation('', {
    keyPrefix: 'modules.header.components.totalTested',
  });
  const location = useLocation();
  const totalUsersRef = useRef<HTMLSpanElement>(null);
  const { isError, isLoading, totalTestedUsers } = useGetTotalTestedUsers();
  const getTotalTestedUsers = () => {
    if (location.pathname === '/') {
      return isChooseProfession ? totalTestedUsers : '-';
    } else {
      return totalTestedUsers;
    }
  };


  const error = isError ? <ErrorMessage /> : null;
  const spinner = isLoading ? (
    <Spinner width={50} height={50} color={'#fcfdff'} margin='0 auto' />
  ) : null;

  const view = () => {
    return (
      <StyledDivWrapper>
        <StyledSpanText>{`${t('totalTested')}:`}</StyledSpanText>
        <StyledSpanNumber ref={totalUsersRef}>
          {getTotalTestedUsers()}
        </StyledSpanNumber>
      </StyledDivWrapper>
    );
  };
  const content = !(isLoading || isError) ? view() : null;


  return (
    <>
      {content} {spinner} {error}
    </>
  );
};

export default TotalTested;
