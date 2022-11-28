import React from "react";
import Container from "../Container/Container";
import CallToAction from "./CallToAction/CallToAction";
import "./main.css";
import TestFeatures from "./TestFeatures/TestFeatures";

const Main = () => {
  return (
    <main className="main">
      <Container>
        <CallToAction/>
        <TestFeatures/>
      </Container>
    </main>
  );
};

export default Main;
