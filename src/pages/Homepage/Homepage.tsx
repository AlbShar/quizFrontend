import Container from '../../components/Container/Container';
import CallToAction from '../../modules/CallToAction/index';
import Footer from '../../components/Footer/Footer';
import { StyledMain } from '../../styles/Main.Styled';
import GeneralInfoTest from '../../components/GeneralInfoTest/GeneralInfoTest';
import BenefitInfo from '../../modules/BenefitInfo';
import AboutUs from '../../components/AboutUs/AboutUs';

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
        
      </StyledMain>
      {/* <GeneralInfoTest /> */}
      {/* <Footer /> */}
    </>
  );
};

export default Homepage;
