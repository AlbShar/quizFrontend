import CallToAction from 'modules/CallToAction';
import {Footer} from 'components/Footer';
import AboutUs from 'components/AboutUs/AboutUs';
import {BenefitInfo} from 'components/BenefitInfo';
import {TestRules} from 'components/TestRules';
import {ResultsInfo} from 'components/ResultsInfo';

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
          <BenefitInfo />
          <AboutUs />
          <TestRules />
          <ResultsInfo />
      </StyledMain>
      <Footer />
    </>
  );
};

export default Home;