import { useRef, useState, useContext } from 'react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import ErrorMessage from '../../../../UI/ErrorMessage/ErroMessage';
import Spinner from '../../../../UI/Spinner/Spinner';
import { getAllTestedUsers } from '../../api/getAllTestedUsers';

import {
  StyledSpanText,
  StyledSpanNumber,
  StyledDivWrapper,
} from './TotalTested.styled';
import { ContextProfession } from '../../../../components/Context';


type TotalTestedProps = {
  isChooseProfession: boolean;
};

const TotalTested = ({ isChooseProfession }: TotalTestedProps): JSX.Element => {
  const { t } = useTranslation();
  const totalUsersRef = useRef<HTMLSpanElement>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [allTestedUsers, setAllTestedUsers] = useState<number>(0);
  const [profession]: [string, (lang: string) => void] =
    useContext(ContextProfession);

  const error = isError ? <ErrorMessage /> : null;
  const spinner = loading ? (
    <Spinner width={50} height={50} color={'#1f2ce0'} margin='0 auto' />
  ) : null;
  const view = () => {
    return (
      <StyledDivWrapper>
        <StyledSpanText>{`${t('Прошли тест')}:`}</StyledSpanText>
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
    console.log(`${profession}/users`);
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
