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

  return (
    <>
      <StyledMain>
        <div>
          <Container>
            <StyledSectionResults>
              <Score/>
              <ResultTime />
            </StyledSectionResults>
            <StyledSection>
              <BarChart />
              <DoughuntChart/>
            </StyledSection>
          </Container>
          <UserAnswers />
        </div>
      </StyledMain>
    </>
  );
};

export default Results;
