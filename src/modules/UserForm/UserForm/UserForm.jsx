import React from "react";
import InputField from "../UI/InputField/InputField";
import Select from "../UI/Select/Select";
import Button from "../UI/Button/Button";
import { useTranslation } from "react-i18next";
import {
    StyledSpan,
    StyledPForm,
    StyledFieldset,
    StyledInputRadio,
    StyledImgGender,
    StyledDivWrapperGender,
    StyledSpanGender,
    StyledLabelGender,
  } from "./UserForm.Styled";
  import womanavatar from "../icons/womanavatar.png";
  import manavatar from "../icons/manavatar.png";

const UserForm = () => {
    const { t } = useTranslation();

  return (
    <form>
      <StyledFieldset>
        <StyledPForm>
          <label htmlFor="username">
            <StyledSpan>{t("Ваше_имя")}</StyledSpan>
            <InputField
              placeholder="Ваше_имя"
              type="text"
              id="username"
              name="username"
            />
          </label>
        </StyledPForm>
        <StyledPForm>
          <label htmlFor="username">
            <StyledSpan>E-mail</StyledSpan>
            <InputField
              placeholder="E-mail"
              type="email"
              id="useremail"
              name="useremail"
            />
          </label>
        </StyledPForm>
        <StyledPForm>
          <label htmlFor="username">
            <StyledSpan>{t("Возраст")}</StyledSpan>
            <Select/>
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
      <Button/> 
    </form>
  );
};

export default UserForm;
