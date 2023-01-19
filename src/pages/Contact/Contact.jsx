import React from "react";
import Container from "../../components/Container";
import { GlobalStyles } from "../../components/styles/Global";
import Button from "../../components/UI/Button/Button";
import { StyledMain } from "../Main.Styled";
import {
  StyledH1,
  StyledSection,
  StyledP,
  StyledInputText,
  StyledSpan,
  StyledPForm,
  StyledFieldset,
  StyledSelect,
  StyledInputRadio,
  StyledImgGender,
  StyledDivWrapperGender,
  StyledSpanGender,
  StyledLabelGender,
  StyledOption
} from "./Contact.styled";
import manavatar from "../../images/icons/manavatar.png";
import womanavatar from "../../images/icons/womanavatar.png";
import { useTranslation } from "react-i18next";

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
              <form>
                <StyledFieldset>
                  <StyledPForm>
                    <label htmlFor="username">
                      <StyledSpan>{t("Ваше_имя")}</StyledSpan>
                      <StyledInputText
                        placeholder={t("Ваше_имя")}
                        type="text"
                        id="username"
                        name="username"
                        onClick={(e) => {
                          e.target.previousElementSibling.style.color = `#6768d7`;
                        }}
                        onBlur={(e) => {
                          e.target.previousElementSibling.style.color = `#81868C`;
                        }}
                      />
                    </label>
                  </StyledPForm>
                  <StyledPForm>
                    <label htmlFor="username">
                      <StyledSpan>E-mail</StyledSpan>
                      <StyledInputText
                        placeholder="E-mail"
                        type="email"
                        id="useremail"
                        name="useremail"
                        onClick={(e) => {
                          e.target.previousElementSibling.style.color = `#6768d7`;
                        }}
                        onBlur={(e) => {
                          e.target.previousElementSibling.style.color = `#81868C`;
                        }}
                      />
                    </label>
                  </StyledPForm>
                  <StyledPForm>
                    <label htmlFor="username">
                      <StyledSpan>{t("Возраст")}</StyledSpan>
                      <StyledSelect onClick={(e) => {
                          e.target.previousElementSibling.style.color = `#6768d7`;
                          e.target.style.outline = `1px solid #6768d7`;
                        }}
                        onBlur={(e) => {
                          e.target.previousElementSibling.style.color = `#81868C`;
                          e.target.style.outline = `1px solid #81868C`;
                        }}>
                        <option disabled selected="selected">Возраст</option>
                        <option value="<18"> &lt; 18 </option>
                        <option value="19-25">19-25</option>
                        <option value="26-35">26-35</option>
                        <option value="36-50">36-50</option>
                        <option value="50+">50+</option>
                      </StyledSelect>
                    </label>
                  </StyledPForm>
                  <StyledDivWrapperGender>
                    <StyledSpanGender>{t("Пол")}</StyledSpanGender>
                    <StyledLabelGender>
                      <StyledInputRadio
                        name="gender"
                        id="userman"
                        value="man"
                      />
                      <StyledImgGender src={manavatar} />
                    </StyledLabelGender>
                    <StyledLabelGender>
                      <StyledInputRadio
                        name="gender"
                        id="userwoman"
                        value="woman"
                      />
                      <StyledImgGender src={womanavatar} />
                    </StyledLabelGender>
                  </StyledDivWrapperGender>
                </StyledFieldset>
                <Button
                  type="Link"
                  goToPage="/results"
                  textBtn={t("Получить_результат")}
                  pageName='contact'
                />
              </form>
            </article>
          </StyledSection>
        </Container>
      </StyledMain>
    </>
  );
};

export default Contact;
