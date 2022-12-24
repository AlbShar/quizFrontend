import React from "react";
import Container from "../../components/Container";
import CallToAction from "../../components/CallToAction";
import Features from "../../components/Features/Features";
import Footer from "../../components/Footer/Footer";
import { GlobalStyles } from "../../components/styles/Global";

const Homepage = () => {
  return (
    <main style={{ flex: "1 1 auto" }}>
      <Container>
        <GlobalStyles/>
        <CallToAction />
        <Features pageName="Homepage"/>
      </Container>
      <Footer/>
    </main>
  );
};

export default Homepage;
