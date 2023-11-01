import { useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { Container } from 'components/container';
import { Spinner } from 'UI/spinner';
import { ContextLanguage } from 'components/context';
import { ErrorMessage } from 'UI/errorMessage';
import { useGetStatusLoading } from 'hooks/useGetStatusLoading';

import { useGetFilteredUserAnswers } from 'modules/userAnswers/hooks/useGetFilteredUserAnswers';
import { fetchUserAnswer } from 'modules/userAnswers/userAnswersSlice';
import FilterByRight from 'modules/userAnswers/components/filterByRight/filterByRight';
import FilterByThemes from 'modules/userAnswers/components/filterByThemes/filterByThemes';

import {
  StyledLi,
  StyledListAnswers,
  StyledUl,
  StyledSpan,
  StyledSum,
  StyledSection,
  StyledP,
} from 'modules/userAnswers/userAnswers/userAnswers.Styled';

import type { AppDispatch } from 'app/store/index';
import type { DataQuestionAndUserAnswer } from '../types/types';

export const UserAnswers = () => {
  const [lang] = useContext(ContextLanguage);

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
        {filteredDataQuestionAndAnswers.length ? (
          filteredDataQuestionAndAnswers.map((dataQuestionAndAnswer) => {
            const { id } = dataQuestionAndAnswer;
            return <ViewUserAnswer {...dataQuestionAndAnswer} key={id} />;
          })
        ) : (
          <StyledP>{t('notResult')}</StyledP>
        )}
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
