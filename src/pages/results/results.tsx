import { UserAnswers } from 'modules/userAnswers';
import { Container } from 'components/container';
import { Footer } from 'components/footer';
import { withChart } from 'modules/chart';
import { withResult } from 'modules/result';
import { Main } from 'components/main';

import { StyledSection, StyledSectionResults } from './results.Styled';

const Results = () => {
  const ResultScores = withResult('scores');
  const ResultTime = withResult('time');
  const ChartBar = withChart('bar');
  const ChartDoughunt = withChart('doughunt');

  return (
    <>
      <Main>
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
      </Main>
      <Footer />
    </>
  );
};

export default Results;
