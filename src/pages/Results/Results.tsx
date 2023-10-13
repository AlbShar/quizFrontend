import { useState, useCallback } from 'react';

import { StyledMain } from '../../styles/Main.Styled';
import { UserAnswers } from '../../modules/UserAnswers';
import Container from '../../components/Container/Container';
import DoughuntChart from '../../components/DoughuntChart/DoughuntChart';
import Score from '../../modules/Score/index';
import ResultTime from '../../modules/ResultTime/index';
import BarChart from '../../components/BarChart/BarChart';
import Footer from '../../components/Footer/Footer';

import { StyledSection, StyledSectionResults } from './Results.Styled';


const Results = () => {

  return (
    <>
      <StyledMain>
        <div style={{ backgroundColor: '#1C1C1C', padding: '0 0 70px 0' }}>
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
        </div>
        <UserAnswers/>
      </StyledMain>
      <Footer />
    </>
  );
};

export default Results;