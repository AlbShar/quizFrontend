import CallToAction from '../../modules/CallToAction/index';
import Footer from '../../components/Footer/Footer';
import { StyledMain } from '../../styles/Main.Styled';
import AboutUs from '../../components/AboutUs/AboutUs';
import BenefitInfo from '../../components/BenefitInfo/BenefitInfo';
import TestRules from '../../components/TestRules/TestRules';
import ResultsInfo from '../../components/ResultsInfo/ResultsInfo';

type HomepageProps = {
  isChooseProfession: boolean;
  setChooseProfession: (item: boolean) => void;
};

const Homepage = ({
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

export default Homepage;
