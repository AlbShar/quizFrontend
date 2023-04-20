import { useState, ChangeEvent, FC, useEffect } from "react";
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

type TDataInputs = {
  htmlFor: "username" | "email",
  placeholder: "Ваше_имя" | "E-mail",
  type: "text" | "email",
  id: "username" | "email",
  name: "userName" | "userEmail",
  nameField: string,
};

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

const refsInputs: HTMLInputElement[] = [];
const setRefs = (elem: HTMLInputElement) => {
  refsInputs.push(elem);
};
const onFocusNameField = () => {
  refsInputs[0]?.focus();
};
const dataInputs: TDataInputs[] = [{
  htmlFor: "username",
  placeholder: "Ваше_имя",
  type:"text",
  id:"username",
  name:"userName",
  nameField: t("Ваше_имя"),
},
{
  htmlFor: "email",
  placeholder: "E-mail",
  type: "email",
  id: "email",
  name: "userEmail",
  nameField: "Email",
}];

const inputsCallback = (dataInput: TDataInputs, index: number) => {
  const {htmlFor, placeholder, nameField, type, id, name} = dataInput;
    return (
      <StyledPForm key={index + 1}>
      <label htmlFor={htmlFor}>
        <StyledSpan>{nameField}</StyledSpan>
        <InputField
          setRefs={setRefs}
          placeholder={placeholder}
          type={type}
          id={id}
          name={name}
          value={valueInput.userName}
          onChange={onValueInput}
        />
      </label>
    </StyledPForm>
    );
};

  useEffect(() => {
    onFocusNameField();
  });
  
  return (
    <form>
      <StyledFieldset>
        {dataInputs.map(inputsCallback)}
      </StyledFieldset>
      <Button />
    </form>
  );
};

export default UserForm;
