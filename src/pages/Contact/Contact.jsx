import React from "react";
import Container from "../../components/Container";
import { GlobalStyles } from "../../components/styles/Global";
import { StyledMain } from "../Main.Styled";
import {
  StyledH1,
  StyledSection,
  StyledP,
} from "./Contact.styled";
import { useTranslation } from "react-i18next";

import Form from "../../components/UI/Form";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <>
      <GlobalStyles />
      <StyledMain>
        <Container>
          <StyledSection>
            <article>
              <StyledH1>{t("Прекрасная_работа")}</StyledH1>
              <StyledP>
              {t("Учли_ваши_результаты")}
              </StyledP>
            </article>
            <article>
              <Form/>
            </article>
          </StyledSection>
        </Container>
      </StyledMain>
    </>
  );
};

export default Contact;
