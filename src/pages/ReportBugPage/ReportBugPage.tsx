import React from "react";
import Container from "../../components/Container/Container";
import ReportBugTest from "../../components/ReportBugTest/ReportBugTest";
import { useTranslation } from "react-i18next";
import { StyledH1 } from "./ReportBugPage.Styled";
import { StyledMain } from "../../styles/Main.Styled";


const ReportBugPage = () => {
  const { t } = useTranslation();

  return (
    <StyledMain>
      <Container>
        <StyledH1>{t("Нашли_ошибку")}</StyledH1>
        <ReportBugTest/>
      </Container>
    </StyledMain>
  );
};



export default ReportBugPage;
