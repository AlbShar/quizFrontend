import { useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { Container } from 'components/Container/Container';
import { Spinner } from 'UI/Spinner/Spinner';
import { ContextLanguage } from 'components/Context';
import { ErrorMessage } from 'UI/ErrorMessage/ErrorMessage';
import { useGetStatusLoading } from 'hooks/useGetStatusLoading';

import { useGetFilteredUserAnswers } from '../hooks/useGetFilteredUserAnswers';
import { fetchUserAnswer } from '../userAnswersSlice';
import FilterByRight from '../components/FilterByRight/FilterByRight';
import FilterByThemes from '../components/FilterByThemes/FilterByThemes';

import {
  StyledLi,
  StyledListAnswers,
  StyledUl,
  StyledSpan,
  StyledSum,
  StyledSection,
} from './UserAnswers.Styled';

import type { AppDispatch } from 'app/store/index';
import type { DataQuestionAndUserAnswer } from '../types/types';

export const UserAnswers = () => {
  const [lang]: [string, (lang: string) => void] = useContext(ContextLanguage);

  const { t } = useTranslation('', {
    keyPrefix: 'modules.userAnswers',
  });
  const filteredDataQuestionAndAnswers = useGetFilteredUserAnswers();
  const statusLoading = useGetStatusLoading();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchUserAnswer());
  }, []);

  useEffect(() => {
    dispatch(fetchUserAnswer());
  }, [lang]);

  if (statusLoading === 'loading') {
    return (
      <Spinner width={50} height={50} color={'#1f2ce0'} margin={'0 auto'} />
    );
  }

  if (statusLoading === 'error') {
    return <ErrorMessage />;
  }

  return (
    <Container>
      <details style={{ padding: '30px 0' }} open>
        <StyledSum>{t('text')}</StyledSum>
        <StyledSection>
          <FilterByThemes />
          <FilterByRight />
        </StyledSection>
        {filteredDataQuestionAndAnswers.map((dataQuestionAndAnswer) => {
          const { id } = dataQuestionAndAnswer;
          return <ViewUserAnswer {...dataQuestionAndAnswer} key={id} />;
        })}
      </details>
    </Container>
  );
};

export const ViewUserAnswer = ({
  descr,
  img,
  id,
  name,
  rightAnswer,
  theme,
  answerOptions,
  userAnswer,
}: DataQuestionAndUserAnswer) => {
  const { t } = useTranslation('', {
    keyPrefix: 'modules.userAnswers',
  });
  const isRight = userAnswer?.point ? true : false;
  const color = isRight ? 'green' : 'red';
  const answerOptionsItems = Object.entries(answerOptions)
    .map(([key, value]) => `${key}: ${value}`)
    .join(', ');
  const className = {
    borderRadius: 10,
    border: `1px solid ${color}`,
  };
  const explanation = descr.startsWith('http') ? (
    <a href={descr} target='_blank' rel='noreferrer'>
      {t('link')}
    </a>
  ) : (
    descr
  );

  return (
    <StyledUl>
      <StyledListAnswers style={className} key={id}>
        <StyledUl>
          <StyledLi>
            <StyledSpan>{`Вопрос № ${id}: `}</StyledSpan>
            {`${name} (${theme})`}
          </StyledLi>
          {img === 'No' ? (
            false
          ) : (
            <StyledLi>
              <img style={{ maxWidth: '100%' }} src={img} alt='code' />
            </StyledLi>
          )}
          <StyledLi>
            <StyledSpan>{`${t('answerOptions')}: `}</StyledSpan>
            {answerOptionsItems}
          </StyledLi>
          <StyledLi>
            <StyledSpan>{`${t('userAnswer')}: `}</StyledSpan>{' '}
            {userAnswer.userAnswer.slice(0, 3)}
          </StyledLi>
          {isRight ? (
            false
          ) : (
            <StyledLi>
              <StyledSpan>{`${t('rightAnswer')}: `}</StyledSpan>
              {rightAnswer}
            </StyledLi>
          )}
          <StyledLi>
            <StyledSpan>{`${t('explanation')}: `} </StyledSpan>
            {explanation}
          </StyledLi>
        </StyledUl>
      </StyledListAnswers>
    </StyledUl>
  );
};
