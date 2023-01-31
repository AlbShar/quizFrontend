import React from "react";
import Container from "../../components/Container";
import { CallToAction } from "../../modules/CallToAction/index";
import Footer from "../../modules/Footer/index";
import { GlobalStyles } from "../../components/styles/Global";
import { StyledMain } from "../Main.Styled";
import GeneralInfoTest from "../../modules/GeneralInfoTest/index";

const Homepage = () => {
  return (
    <>
    <GlobalStyles/>
    <StyledMain>
      <Container flex={false}>
        <CallToAction />
        <GeneralInfoTest/>
      </Container>
    </StyledMain>
    <Footer/>
    </>
  );
};

export default Homepage;
