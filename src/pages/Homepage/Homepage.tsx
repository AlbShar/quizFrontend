import Container from '../../components/Container/Container';
import CallToAction from '../../modules/CallToAction/index';
import Footer from '../../components/Footer/Footer';
import { StyledMain } from '../../styles/Main.Styled';
import GeneralInfoTest from '../../components/GeneralInfoTest/GeneralInfoTest';
import BenefitInfo from '../../modules/BenefitInfo';

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
          <Container style={{ flex: '1 1 auto' }}>
            <CallToAction
              isChooseProfession={isChooseProfession}
              setChooseProfession={setChooseProfession}
            />
          </Container>
        </div>
        <div style={{ backgroundColor: 'var(--color-white)', position: 'relative' }}>
          <Container style={{ flex: '1 1 auto' }}>
            <BenefitInfo />
          </Container>
        </div>
      </StyledMain>
      {/* <GeneralInfoTest /> */}
      {/* <Footer /> */}
    </>
  );
};

export default Homepage;
