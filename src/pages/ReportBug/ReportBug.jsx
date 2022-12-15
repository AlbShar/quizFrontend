import React from "react";
import Container from "../../components/Container/Container";
import Features from "../../components/Features/Features";
import "./reportBug.css";
import { useTranslation } from "react-i18next";


const Contacts = () => {
  const { t } = useTranslation();

  return (
    <main style={{ flex: "1 1 auto" }}>
      <Container>
        <h1 className="report-bug__title">{t("Нашли_ошибку")}</h1>
        <Features pageName="ReportBug"/>
      </Container>
    </main>
  );
};

export default Contacts;
