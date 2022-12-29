import React from "react";
import Container from "../../components/Container";
import Features from "../../components/Features";
import { useTranslation } from "react-i18next";
import { GlobalStyles } from "../../components/styles/Global";
import { StyledH1 } from "./H1.Styled";
import { StyledMain } from "../Main.Styled";


const Contacts = () => {
  const { t } = useTranslation();

  return (
    <StyledMain>
      <Container>
        <GlobalStyles/>
        <StyledH1>{t("Нашли_ошибку")}</StyledH1>
        <Features pageName="ReportBug"/>
      </Container>
    </StyledMain>
  );
};



export default Contacts;
