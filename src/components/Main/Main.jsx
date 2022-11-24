import React from "react";
import Container from "../Container/Container";
import CallToAction from "./CallToAction/CallToAction";
import "./main.css";

const Main = (props) => {
  return (
    <main className="main">
      <Container content={<CallToAction props={props}/>}>
      </Container>
    </main>
  );
};

export default Main;
