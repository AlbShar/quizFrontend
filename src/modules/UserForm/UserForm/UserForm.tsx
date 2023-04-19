import { useState, ChangeEvent, FC, useRef } from "react";
import { useTranslation } from "react-i18next";

import InputField from "../UI/InputField/InputField";
import Button from "../UI/Button/Button";

import {
  StyledSpan,
  StyledPForm,
  StyledFieldset,
} from "./UserForm.Styled";

interface IValueInput {
  userName: string;
  userEmail: string ;
}

const UserForm: FC = () => {
  const { t } = useTranslation();
  const [valueInput, setValueInput] = useState<IValueInput>({
    userName: "",
    userEmail: "",
  });
  const onValueInput = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setValueInput((valueInput) => ({ ...valueInput, [name]: value }));
  };
  
  const inputUserNameRef = useRef<HTMLInputElement>(null);
  const inputUserEmailRef = useRef<HTMLInputElement>(null);
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
      </StyledFieldset>
      <Button />
    </form>
  );
};

export default UserForm;
