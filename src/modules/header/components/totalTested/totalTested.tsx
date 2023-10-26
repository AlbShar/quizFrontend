import { useRef, useState, useContext } from 'react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ContextProfession } from 'components/context';
import {ErrorMessage} from 'UI/errorMessage';
import {Spinner} from 'UI/spinner';

import { getAllTestedUsers } from 'modules/header/api/getAllTestedUsers';

import {
  StyledSpanText,
  StyledSpanNumber,
  StyledDivWrapper,
} from 'modules/header/components/totalTested/totalTested.styled';


type TotalTestedProps = {
  isChooseProfession: boolean;
};

const TotalTested = ({ isChooseProfession }: TotalTestedProps): JSX.Element => {
  const { t } = useTranslation('', {
    keyPrefix: 'modules.header.components.totalTested',
  });

  const totalUsersRef = useRef<HTMLSpanElement>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [allTestedUsers, setAllTestedUsers] = useState<number>(0);
  const [profession]: [string, (lang: string) => void] =
    useContext(ContextProfession);

  const error = isError ? <ErrorMessage /> : null;
  const spinner = loading ? (
    <Spinner width={50} height={50} color={'#fcfdff'} margin='0 auto' />
  ) : null;
  const view = () => {
    return (
      <StyledDivWrapper>
        <StyledSpanText>{`${t('totalTested')}:`}</StyledSpanText>
        <StyledSpanNumber ref={totalUsersRef}>
          {isChooseProfession ? allTestedUsers : '-'}
        </StyledSpanNumber>
      </StyledDivWrapper>
    );
  };
  const content = !(loading || isError) ? view() : null;

  const dataHasLoaded = (res: number) => {
    setLoading(false);
    setAllTestedUsers(res);
  };

  const onErrorHandler = (error) => {
    setLoading(false);
    setIsError(true);
    throw new Error(error.message);
  };

  useEffect(() => {
    if (profession) {
      const url = `${profession}/users`;
      getAllTestedUsers(url).then(dataHasLoaded).catch(onErrorHandler);
    } else {
      setLoading(false);
    }
  }, [profession]);

  return (
    <>
      {content} {spinner} {error}
    </>
  );
};

export default TotalTested;
