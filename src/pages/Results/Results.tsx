import { useState, useCallback } from 'react';

import { StyledMain } from '../../styles/Main.Styled';
import { UserAnswers } from '../../modules/UserAnswers';
import Container from '../../components/Container/Container';
import DoughuntChart from '../../components/DoughuntChart/DoughuntChart';
import Score from '../../modules/Score/index';
import ResultTime from '../../modules/ResultTime/index';
import BarChart from '../../components/BarChart/BarChart';

import { StyledSection, StyledSectionResults } from './Results.Styled';


const Results = () => {
  const [rightAnswers, setRightAnswers] = useState<number>(0);

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
              <BarChart />
              <DoughuntChart rightAnswers={rightAnswers} />
            </StyledSection>
          </Container>
          <UserAnswers />
        </div>
      </StyledMain>
    </>
  );
};

export default Results;
