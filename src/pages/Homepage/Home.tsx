import {CallToAction} from 'modules/callToAction';
import {Footer} from 'components/footer';
import {AboutUs} from 'components/aboutUs';
import { BenefitsSite } from 'components/benefitsSite';
import {TestRulesInfo} from 'components/testRulesInfo';
import {ResultsTestInfo} from 'components/resultsTestInfo';

import { StyledMain } from '../../styles/Main.Styled';

type HomepageProps = {
  isChooseProfession: boolean;
  setChooseProfession: (item: boolean) => void;
};

const Home = ({
  isChooseProfession,
  setChooseProfession,
}: HomepageProps) => {
  
  return (
    <>
      <StyledMain>
        <CallToAction
          isChooseProfession={isChooseProfession}
          setChooseProfession={setChooseProfession}
        />
        <BenefitsSite />
        <AboutUs />
        <TestRulesInfo />
        <ResultsTestInfo />
      </StyledMain>
      <Footer />
    </>
  );
};

export default Home;