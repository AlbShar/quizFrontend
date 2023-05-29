import { useState, ChangeEvent, FC, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

import InputField from "../UI/InputField/InputField";
import Button from "../UI/Button/Button";

import {
  StyledSpan,
  StyledPForm,
  StyledFieldset,
} from "./UserForm.Styled";


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
  const [userName, setUserName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [isNameValidation, setIsNameValidation] = useState<boolean>(false);
  const [isEmailValidation, setIsEmailValidation] = useState<boolean>(false);
  const [isDisabledBtn, setIsDisabledBtn] = useState<boolean>(true);
  
  const refsInputs: HTMLInputElement[] = [];
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

  const onValueInput = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target;
    const newValue = target.value;
    const type = target.type;
    type === "text" ? setUserName(userName => newValue) : setUserEmail(userEmail => newValue);
  };


  useEffect(() => {
    onFocusNameField();
  }, []);

  useEffect(() => {
    const validateInputName = () => {
      if (userName.length < 2 || userName.length > 50) {
        setIsNameValidation(_ => false);
      } else if (!isNameValidation) {
        setIsNameValidation(_ => true);
      }
     };
     if (userName !== "") {
      validateInputName();
     }
    
  }, [userName]);

  useEffect(() => {
     const validateInputEmail = () => {
    if (userEmail.length < 7 || userEmail.length > 64 || !userEmail.includes("@")) {
      setIsEmailValidation(_ => false);
    } else if (!isEmailValidation){
      setIsEmailValidation(_ => true);
    }
   };

   if (userEmail !== "") {
    validateInputEmail();
   }
   
  }, [userEmail]);

  useEffect(() => {
    setIsDisabledBtn(!(isEmailValidation && isNameValidation));
  }, [isEmailValidation, isNameValidation]);
 

const setRefs = (elem: HTMLInputElement) => {
  refsInputs.push(elem);
};
const onFocusNameField = () => {
  refsInputs[0]?.focus();
};



const inputsCallback = (dataInput: TDataInputs, index: number) => {
  const {htmlFor, placeholder, nameField, type, id, name} = dataInput;
  const isValidation = type === "text" ? isNameValidation : isEmailValidation;
  const value = type === "text" ? userName : userEmail;

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
          value={value}
          onChange={onValueInput}
        />
        {isValidation ? null : <div>Введите корректные данные</div>}
      </label>
    </StyledPForm>
    );
};

  
  
  return (
    <form>
      <StyledFieldset>
        {dataInputs.map(inputsCallback)}
      </StyledFieldset>
      <Button userName={userName} userEmail={userEmail} isDisabledBtn={isDisabledBtn}/>
    </form>
  );
};

export default UserForm;
