import { useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';

import Container from '../../../components/Container/Container';
import FilterByRight from '../components/FilterByRight/FilterByRight';
import FilterByThemes from '../components/FilterByThemes/FilterByThemes';
import Spinner from '../../../UI/Spinner/Spinner';
import { ContextLanguage, ContextIdUser } from '../../../components/Context';
import ErrorMessage from '../../../UI/ErrorMessage/ErroMessage';
import { fetchUserAnswer } from '../userAnswersSlice';

import {
  StyledLi,
  StyledListAnswers,
  StyledUl,
  StyledSpan,
  StyledSpanResult,
  StyledSum,
  StyledSection,
} from './UserAnswers.Styled';

import type { AppDispatch, RootState } from '../../../app/store/index';
import type {
  TQuestionAndAnswer,
} from '../types/types';


export const UserAnswers = () => {
  const [lang]: [string, (lang: string) => void] = useContext(ContextLanguage);
  const dispatch = useDispatch<AppDispatch>();
  const { t } = useTranslation();
  const userAnswersLoadingStatus = useSelector(
    (state: RootState) => state.userAnswersReducer.userAnswersLoadingStatus,
  );

  const filteredUserAnswers = createSelector(
    (state: RootState) => state.filtersReducer.filterByRight,
    (state: RootState) => state.filtersReducer.filterByTheme,
    (state: RootState) => state.userAnswersReducer.userAnswers,
    (filterByRight, filterByTheme, userAnswers) => {
      let result: TQuestionAndAnswer[] = Object.values(userAnswers);

      if (filterByRight !== 'Все вопросы') {
        switch (filterByRight) {
          case 'Верно':
            result = result.filter(
              (userAnswer) => userAnswer.userAnswer.point === 1,
            );
            break;
          case 'Неверно':
            result = result.filter(
              (userAnswer) => userAnswer?.userAnswer?.point === 0,
            );
            break;
        }
      }

      if (filterByTheme !== 'Все тематики') {
        result = result.filter(
          (userAnswer) => userAnswer.theme === filterByTheme,
        );
      }

      return result;
    },
  );
  const filteredAnswers = useSelector(filteredUserAnswers);

  
  // const [idUser]: [string, (lang: string) => void] = useContext(ContextIdUser);

  useEffect(() => {
    dispatch(fetchUserAnswer());
  }, [lang]);

  if (userAnswersLoadingStatus === 'loading') {
    return (
      <Spinner width={50} height={50} color={'#1f2ce0'} margin={'0 auto'} />
    );
  } else if (userAnswersLoadingStatus === 'error') {
    return <ErrorMessage />;
  }

  return (
    <Container>
      <details open>
        <StyledSum>{t('Ответы')}</StyledSum>
        <StyledSection>
          <FilterByThemes />
          <FilterByRight />
        </StyledSection>
        <StyledUl>
          {filteredAnswers.length ? filteredAnswers.map((userAnswerArr) => {
            const {
              descr,
              img,
              id,
              name,
              rightAnswer,
              theme,
              answerOptions,
              userAnswer,
            } = userAnswerArr;
            const isRight = userAnswer?.point ? true : false;
            const color = isRight ? 'green' : 'red';
            const className = {
              borderRadius: 10,
              border: `1px solid ${color}`,
            };
            return (
              <StyledListAnswers style={className} key={id}>
                <StyledUl>
                  <StyledSpanResult isRight={isRight}>
                    {isRight ? '\u2714' : '\u2718'}
                  </StyledSpanResult>
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
                    <StyledSpan>{`${t('Варианты_ответов')}: `}</StyledSpan>
                    {Object.entries(answerOptions)
                      .map(([key, value]) => `${key}: ${value}`)
                      .join(', ')}
                  </StyledLi>
                  <StyledLi>
                    <StyledSpan>{`${t('Ваш_ответ')}: `}</StyledSpan>{' '}
                    {userAnswer.userAnswer}
                  </StyledLi>
                  {isRight ? (
                    false
                  ) : (
                    <StyledLi>
                      <StyledSpan>{`${t('Правильный_ответ')}: `}</StyledSpan>
                      {rightAnswer}
                    </StyledLi>
                  )}
                  <StyledLi>
                    <StyledSpan>{`${t('Объяснение')}: `} </StyledSpan>
                    {descr.startsWith('http') ? (
                      <a href={descr} target='_blank' rel='noreferrer'>
                        {t('Ссылка')}
                      </a>
                    ) : (
                      descr
                    )}
                  </StyledLi>
                </StyledUl>
              </StyledListAnswers>
            );
          }) : <p>По заданным фильтрам ответы не найдены</p>}
        </StyledUl>
      </details>
    </Container>
  );
};
