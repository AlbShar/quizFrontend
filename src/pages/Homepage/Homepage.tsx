import Container from '../../components/Container/Container';
import CallToAction from '../../modules/CallToAction/index';
import Footer from '../../components/Footer/Footer';
import { StyledMain } from '../../styles/Main.Styled';
import GeneralInfoTest from '../../components/GeneralInfoTest/GeneralInfoTest';

type HomepageProps = {
  isChooseProfession: boolean
  setChooseProfession: (item: boolean) => void;
};

const Homepage = ({
  isChooseProfession,
  setChooseProfession,
}: HomepageProps) => {
  return (
    <>
      <StyledMain>
        <Container>
          <CallToAction
            isChooseProfession={isChooseProfession}
            setChooseProfession={setChooseProfession}
          />
          <GeneralInfoTest />
        </Container>
      </StyledMain>
      <Footer />
    </>
  );
};

export default Homepage;
