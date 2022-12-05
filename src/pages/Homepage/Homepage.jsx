import React from "react";
import Container from "../../components/Container/Container";
import CallToAction from "../../components/CallToAction/CallToAction";
import Features from "../../components/Features/Features";
import Footer from "../../components/Footer/Footer";

const Homepage = () => {
  return (
    <main style={{ flex: "1 1 auto" }}>
      <>
      <Container>
        <CallToAction />
        <Features pageName="Homepage"/>
      </Container>
      <Footer/>
      </>
    </main>
  );
};

export default Homepage;
