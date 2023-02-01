import React from "react";
// import Button from "./Button/Button";
import {
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
} from "../../components/styles/Form.styled";
import { useTranslation } from "react-i18next";
import { setAnimateInputAndText, clearAnimateInputAndText } from "../../index";
import manavatar from "../../images/icons/manavatar.png";
import womanavatar from "../../images/icons/womanavatar.png";

const Form = () => {
  const { t } = useTranslation();

  return (
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
                setAnimateInputAndText(e, "#6768d7");
              }}
              onBlur={(e) => {
                clearAnimateInputAndText(e, "#81868C");
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
                setAnimateInputAndText(e, "#6768d7");
              }}
              onBlur={(e) => {
                clearAnimateInputAndText(e, "#81868C");
              }}
            />
          </label>
        </StyledPForm>
        <StyledPForm>
          <label htmlFor="username">
            <StyledSpan>{t("Возраст")}</StyledSpan>
            <StyledSelect
              onClick={(e) => {
                setAnimateInputAndText(e, "#6768d7");
              }}
              onBlur={(e) => {
                clearAnimateInputAndText(e, "#81868C");
              }}
            >
              <option disabled>Возраст</option>
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
              defaultChecked
            />
            <StyledImgGender src={manavatar} />
          </StyledLabelGender>
          <StyledLabelGender>
            <StyledInputRadio name="gender" id="userwoman" value="woman" />
            <StyledImgGender src={womanavatar} />
          </StyledLabelGender>
        </StyledDivWrapperGender>
      </StyledFieldset>
      {/* <Button
        type="Link"
        goToPage="/results"
        textBtn={t("Получить_результат")}
        pageName="contact"
      /> */}
    </form>
  );
};

export default Form;
