import { useState, ChangeEvent, FC, useEffect, useRef } from "react";
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

const refsInputs = useRef<HTMLInputElement[]>([]);

const setRefs = (elem: HTMLInputElement) => {
  refsInputs.current.push(elem);
};

  useEffect(() => {
    refsInputs.current[0]?.focus();
    console.log(refsInputs);
  });
  
  return (
    <form>
      <StyledFieldset>
        <StyledPForm>
          <label htmlFor="username">
            <StyledSpan>{t("Ваше_имя")}</StyledSpan>
            <InputField
              setRefs={setRefs}
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
              setRefs={setRefs}
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
