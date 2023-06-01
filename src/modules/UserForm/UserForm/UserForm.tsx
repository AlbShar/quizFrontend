import { useState, ChangeEvent, FC, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";

import InputField from "../UI/InputField/InputField";
import Button from "../UI/Button/Button";
import useValidateName from "../hooks/useValidateName";
import useValidateEmail from "../hooks/useValidateEmail";

import { StyledSpan, StyledPForm, StyledFieldset } from "./UserForm.Styled";

type TDataInputs = {
  htmlFor: "username" | "email";
  placeholder: "Ваше_имя" | "E-mail";
  type: "text" | "email";
  id: "username" | "email";
  name: "userName" | "userEmail";
  nameField: string;
  value: string;
  isValidation: boolean;
  isFirstRender: boolean;
  onError: () => void;
  onValidateInput: () => void;
  reqValue: string
};

const UserForm: FC = () => {
  const { t } = useTranslation();

  const {
    valueUserName, isFirstRenderName, isNameValidation, 
    setValueUserName, hideErrorInputName, onValidateInputName,
    requeirmentsValueName
  } = useValidateName();
  const {
    valueEmail, isFirstRenderEmail, isEmailValidation, 
    setValueEmail, hideErrorInputEmail, onValidateInputEmail
  } = useValidateEmail();

  const [isDisabledBtn, setIsDisabledBtn] = useState<boolean>(true);



  const refsInputs: HTMLInputElement[] = [];
  const dataInputs: TDataInputs[] = [
    {
      htmlFor: "username",
      placeholder: "Ваше_имя",
      type: "text",
      id: "username",
      name: "userName",
      nameField: t("Ваше_имя"),
      value: valueUserName,
      isValidation: isNameValidation,
      isFirstRender: isFirstRenderName,
      onError: hideErrorInputName,
      onValidateInput: onValidateInputName,
      reqValue: requeirmentsValueName
    },
    {
      htmlFor: "email",
      placeholder: "E-mail",
      type: "email",
      id: "email",
      name: "userEmail",
      nameField: "Email",
      value: valueEmail,
      isValidation: isEmailValidation,
      isFirstRender: isFirstRenderEmail,
      onError: hideErrorInputEmail,
      onValidateInput: onValidateInputEmail,
      reqValue: requeirmentsValueName
    },
  ];


  const onValueInput = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const target = e.target;
    const newValue = target.value;
    const type = target.type;
    type === "text"
      ? setValueUserName(_ => newValue)
      : setValueEmail(_ => newValue);
  };

  useEffect(() => {
    const onFocusNameField = () => {
      refsInputs[0]?.focus();
    };
    onFocusNameField();
  }, []);


  useEffect(() => {
    setIsDisabledBtn(!(isEmailValidation && isNameValidation));
  }, [isEmailValidation, isNameValidation]);

  const setRefs = (elem: HTMLInputElement) => {
    refsInputs.push(elem);
  };

  const inputsCallback = (dataInput: TDataInputs, index: number) => {
    const {
      htmlFor,
      placeholder,
      nameField,
      type,
      id,
      name,
      isValidation,
      value,
      isFirstRender,
      onError,
      onValidateInput,
      reqValue
    } = dataInput;

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
            onError={onError}
            onValidateInput={onValidateInput}
          />
          {isFirstRender ? null : isValidation ? null : (
            <div>{`Введите корректные данные. ${reqValue}`}</div>
          )}
        </label>
      </StyledPForm>
    );
  };

  return (
    <form>
      <StyledFieldset>{dataInputs.map(inputsCallback)}</StyledFieldset>
      <Button
        userName={valueUserName}
        userEmail={valueEmail}
        isDisabledBtn={isDisabledBtn}
      />
    </form>
  );
};

export default UserForm;
