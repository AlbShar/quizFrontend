import React from "react";
import Container from "../Container/Container";
import CallToAction from "../CallToAction/CallToAction";
import "./main.css";

const Main = () => {
  return (
    <main className="main">
      <Container content={<CallToAction />}>
      </Container>
    </main>
  );
};

export default Main;
