
import Container from '../../components/Container/Container';
import CallToAction from '../../modules/CallToAction/index';
import Footer from '../../components/Footer/Footer';
import { StyledMain } from '../../styles/Main.Styled';
import GeneralInfoTest from '../../components/GeneralInfoTest/GeneralInfoTest';

const Homepage = () => {

  return (
    <>
      <StyledMain>
        <Container>
          <CallToAction />
          <GeneralInfoTest />
        </Container>
      </StyledMain>
      <Footer />
    </>
  );
};

export default Homepage;
