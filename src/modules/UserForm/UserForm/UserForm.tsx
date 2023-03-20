import { useState, ChangeEvent, FC, useRef } from "react";
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
const womanavatar = require("../icons/womanavatar.png");
const manavatar = require("../icons/manavatar.png");
interface IValueInput {
  userName: string;
  userEmail: string;
  userAge: string;
  userGender: string;
}

const UserForm: FC = () => {
  const { t } = useTranslation();
  const [valueInput, setValueInput] = useState<IValueInput>({
    userName: "",
    userEmail: "",
    userAge: "< 18",
    userGender: "man",
  });
  const onValueInput = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    console.log(value);
    setValueInput((valueInput) => ({ ...valueInput, [name]: value }));
  };
  
  const inputUserNameRef = useRef<HTMLInputElement>(null);
  const inputUserEmailRef = useRef<HTMLInputElement>(null);
  const inputUserRadioManRef = useRef<HTMLInputElement>(null);
  const inputUserRadioWomanRef = useRef<HTMLInputElement>(null);
  return (
    <form>
      <StyledFieldset>
        <StyledPForm>
          <label htmlFor="username">
            <StyledSpan>{t("Ваше_имя")}</StyledSpan>
            <InputField
              refer={inputUserNameRef}
              placeholder="Ваше_имя"
              type="text"
              id="username"
              name="userName"
              value={valueInput.userName}
              onChange={onValueInput}
            />
          </label>
        </StyledPForm>
        <StyledPForm>
          <label htmlFor="username">
            <StyledSpan>E-mail</StyledSpan>
            <InputField
              refer={inputUserEmailRef}
              placeholder="E-mail"
              type="email"
              id="useremail"
              name="userEmail"
              value={valueInput.userEmail}
              onChange={onValueInput}
            />
          </label>
        </StyledPForm>
        <StyledPForm>
          <label htmlFor="username">
            <StyledSpan>{t("Возраст")}</StyledSpan>
            <Select value={valueInput.userAge} onChange={onValueInput} />
          </label>
        </StyledPForm>
        <StyledDivWrapperGender>
          <StyledSpanGender>{t("Пол")}</StyledSpanGender>
          <StyledLabelGender>
            <StyledInputRadio
              ref={inputUserRadioManRef}
              name="userGender"
              id="userman"
              value="man"
              checked={"man" === valueInput.userGender}
              onChange={onValueInput}
            />
            <StyledImgGender src={manavatar} />
          </StyledLabelGender>
          <StyledLabelGender>
            <StyledInputRadio
              ref={inputUserRadioWomanRef}
              name="userGender"
              id="userwoman"
              value="woman"
              checked={"woman" === valueInput.userGender}
              onChange={onValueInput}
            />
            <StyledImgGender src={womanavatar} />
          </StyledLabelGender>
        </StyledDivWrapperGender>
      </StyledFieldset>
      <Button />
    </form>
  );
};

export default UserForm;
