import { UserAnswers } from 'modules/UserAnswers';
import {Container} from 'components/Container';
import { DoughnutChart } from 'components/DoughuntChart';
import Score from 'modules/Score/index';
import ResultTime from 'modules/ResultTime';
import {BarChart} from 'components/BarChart';
import {Footer} from 'components/Footer';

import { StyledMain } from '../../styles/Main.Styled';

import { StyledSection, StyledSectionResults } from './Results.Styled';



const Results = () => {

  return (
    <>
      <StyledMain>
        <div style={{ backgroundColor: '#1C1C1C', padding: '0 0 70px 0' }}>
          <Container>
            <StyledSectionResults>
              <Score />
              <ResultTime />
            </StyledSectionResults>
            <StyledSection>
              <BarChart />
              <DoughnutChart />
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