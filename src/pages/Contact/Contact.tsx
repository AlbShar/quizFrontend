import React from "react";
import Container from "../../components/Container/Container";
import { StyledMain } from "../../styles/Main.Styled";
import {
  StyledH1,
  StyledSection,
  StyledP,
} from "./Contact.styled";
import { useTranslation } from "react-i18next";
import UserForm from "../../modules/UserForm/index";

const Contact = () => {
  const { t } = useTranslation();
  return (
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
              <UserForm/>
            </article>
          </StyledSection>
        </Container>
      </StyledMain>
  );
};

export default Contact;
