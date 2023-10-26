import { UserAnswers } from 'modules/UserAnswers';
import { Container } from 'components/container';
import { Footer } from 'components/footer';
import { withChart } from 'modules/chart';
import { withResult } from 'modules/result';

import { StyledMain } from '../../styles/Main.Styled';

import { StyledSection, StyledSectionResults } from './Results.Styled';

const Results = () => {
  const ResultScores = withResult('scores');
  const ResultTime = withResult('time');
  const ChartBar = withChart('bar');
  const ChartDoughunt = withChart('doughunt');

  return (
    <>
      <StyledMain>
        <div style={{ backgroundColor: '#1C1C1C', padding: '0 0 70px 0' }}>
          <Container>
            <StyledSectionResults>
              <ResultScores />
              <ResultTime />
            </StyledSectionResults>
            <StyledSection>
              <ChartBar />
              <ChartDoughunt />
            </StyledSection>
          </Container>
        </div>
        <UserAnswers />
      </StyledMain>
      <Footer />
    </>
  );
};

export default Results;
