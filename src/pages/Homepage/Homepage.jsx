import React from "react";
import Container from "../../components/Container/Container";
import CallToAction from "../../components/CallToAction/CallToAction";
import TestFeatures from "../../components/TestFeatures/TestFeatures";

const Homepage = () => {
  return (
    <main>
      <Container>
        <CallToAction />
        <TestFeatures />
      </Container>
    </main>
  );
};

export default Homepage;
