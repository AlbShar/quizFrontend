import React from "react";
import Container from "../../components/Container/Container";
import Features from "../../components/Features/Features";
import "./reportBug.css";

const Contacts = () => {
  return (
    <main style={{ flex: "1 1 auto" }}>
      <Container>
        <h1 className="report-bug__title">Нашли ошибку на сайте или в тесте?</h1>
        <Features pageName="ReportBug"/>

      </Container>
    </main>
  );
};

export default Contacts;
