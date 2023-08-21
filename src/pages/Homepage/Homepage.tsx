import Container from '../../components/Container/Container';
import CallToAction from '../../modules/CallToAction/index';
import Footer from '../../components/Footer/Footer';
import { StyledMain } from '../../styles/Main.Styled';
import AboutUs from '../../components/AboutUs/AboutUs';
import BenefitInfo from '../../components/BenefitInfo/BenefitInfo';
import TestRules from '../../components/TestRules/TestRules';

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
        <div style={{ backgroundColor: 'var(--color-dark)' }}>
          <Container>
            <CallToAction
              isChooseProfession={isChooseProfession}
              setChooseProfession={setChooseProfession}
            />
          </Container>
        </div>
        <div style={{ position: 'relative' }}>
          <Container>
            <BenefitInfo />
            <AboutUs />
          </Container>
        </div>
        <div style={{ backgroundColor: 'var(--color-light-gray2)' }}>
          <Container>
            <TestRules />
          </Container>
        </div>
      </StyledMain>
      {/* <Footer /> */}
    </>
  );
};

export default Homepage;
