import React from "react";
import Container from "../../components/Container";
import Features from "../../components/Features/Features";
import "./reportBug.css";
import { useTranslation } from "react-i18next";
import { GlobalStyles } from "../../components/styles/Global";
import { Title } from "../../components/styles/Title.styled";


const Contacts = () => {
  const { t } = useTranslation();

  return (
    <main style={{ flex: "1 1 auto" }}>
      <Container>
        <GlobalStyles/>
        <Title>{t("Нашли_ошибку")}</Title>
        <Features pageName="ReportBug"/>
      </Container>
    </main>
  );
};



export default Contacts;
