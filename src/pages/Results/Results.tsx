import { useState, useCallback, FC } from 'react';

import { StyledMain } from '../../styles/Main.Styled';
import UserAnswers from '../../modules/UserAnswers';
import Container from '../../components/Container/Container';
import Doughnut from '../../modules/Doughunt/index';
import Score from '../../modules/Score/index';
import ResultTime from '../../modules/ResultTime/index';
import ChartBar from '../../modules/ChartBar/index';

import {
  StyledSection,
  StyledSectionResults,
} from './Results.Styled';

import type { TPointsByThemes } from '../../types/types';



const Results = () => {
  const [rightAnswers, setRightAnswers] = useState<number>(0);
  const [pointsByTheme, setPointsByTheme] = useState<TPointsByThemes | null>(
    null,
  );

    const setRightUserAnswers = useCallback((points: number) => {
    setRightAnswers(points);
  }, []);

  return (
    <>
      <StyledMain>
        <div>
          <Container>
            <StyledSectionResults>
              <Score setRightAnswers={setRightUserAnswers} />
              <ResultTime />
            </StyledSectionResults>
            <StyledSection>
              <ChartBar pointsByTheme={pointsByTheme} />
              <Doughnut rightAnswers={rightAnswers} />
            </StyledSection>
          </Container>
          <UserAnswers setPointsByTheme={setPointsByTheme} />
        </div>
      </StyledMain>
    </>
  );
};

export default Results;
