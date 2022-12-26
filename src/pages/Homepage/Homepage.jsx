import React from "react";
import Container from "../../components/Container";
import CallToAction from "../../components/CallToAction";
import Features from "../../components/Features";
import Footer from "../../components/Footer/Footer";
import { GlobalStyles } from "../../components/styles/Global";
import { StyledMain } from "../Main.Styled";

const Homepage = () => {
  return (
    <StyledMain>
      <Container flex={false}>
        <GlobalStyles/>
        <CallToAction />
        <Features pageName="Homepage"/>
      </Container>
      <Footer/>
    </StyledMain>
  );
};

export default Homepage;
