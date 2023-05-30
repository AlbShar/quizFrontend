import { useState, ChangeEvent, FC, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";

import InputField from "../UI/InputField/InputField";
import Button from "../UI/Button/Button";

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
};

const UserForm: FC = () => {
  const { t } = useTranslation();
  const [userName, setUserName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [isNameValidation, setIsNameValidation] = useState<boolean>(false);
  const [isEmailValidation, setIsEmailValidation] = useState<boolean>(false);
  const [isDisabledBtn, setIsDisabledBtn] = useState<boolean>(true);
  const [isFirstRenderName, setIsFirstRenderName] = useState<boolean>(true);
  const [isFirstRenderEmail, setIsFirstRenderEmail] = useState<boolean>(true);

  const hideErrorInputName = useCallback(() => {
    if (!isNameValidation && userName.length > 2 && userName.length < 50) {
      setIsNameValidation(true);
    }
  }, [isNameValidation, userName]);

  const onValidateInputName = () => {
    if (isFirstRenderName) {
      setIsFirstRenderName((_) => false);
    }

    if (userName.length < 2 || userName.length > 50) {
      setIsNameValidation((_) => false);
    }
  };

  const onValidateInputEmail = () => {
    if (isFirstRenderEmail) {
      setIsFirstRenderEmail(false);
    }

    if (
      userEmail.length < 7 ||
      userEmail.length > 64 ||
      !userEmail.includes("@")
    ) {
      setIsEmailValidation((_) => false);
    }
    //  else if (!isEmailValidation) {
    //   setIsEmailValidation((_) => true);
    // }
  };

  const hideErrorInputEmail = useCallback(() => {
    if (!isEmailValidation && userEmail.length > 7 && userEmail.length < 64) {
      setIsEmailValidation(true);
    }
  }, [isEmailValidation, userEmail]);



  const refsInputs: HTMLInputElement[] = [];
  const dataInputs: TDataInputs[] = [
    {
      htmlFor: "username",
      placeholder: "Ваше_имя",
      type: "text",
      id: "username",
      name: "userName",
      nameField: t("Ваше_имя"),
      value: userName,
      isValidation: isNameValidation,
      isFirstRender: isFirstRenderName,
      onError: hideErrorInputName,
      onValidateInput: onValidateInputName,
    },
    {
      htmlFor: "email",
      placeholder: "E-mail",
      type: "email",
      id: "email",
      name: "userEmail",
      nameField: "Email",
      value: userEmail,
      isValidation: isEmailValidation,
      isFirstRender: isFirstRenderEmail,
      onError: hideErrorInputEmail,
      onValidateInput: onValidateInputEmail,
    },
  ];

  const onValueInput = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const target = e.target;
    const newValue = target.value;
    const type = target.type;
    type === "text"
      ? setUserName((userName) => newValue)
      : setUserEmail((userEmail) => newValue);
  };

  useEffect(() => {
    const onFocusNameField = () => {
      refsInputs[0]?.focus();
    };
    onFocusNameField();
  }, []);

  // useEffect(() => {
  //   const validateInputEmail = () => {
  //     if (
  //       userEmail.length < 7 ||
  //       userEmail.length > 64 ||
  //       !userEmail.includes("@")
  //     ) {
  //       setIsEmailValidation((_) => false);
  //     } else if (!isEmailValidation) {
  //       setIsEmailValidation((_) => true);
  //     }
  //   };

  //   if (userEmail !== "") {
  //     if (isFirstRenderEmail) {
  //       setIsFirstRenderEmail(false);
  //     }
  //     validateInputEmail();
  //   }
  // }, [userEmail]);

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
            <div>Введите корректные данные</div>
          )}
        </label>
      </StyledPForm>
    );
  };

  return (
    <form>
      <StyledFieldset>{dataInputs.map(inputsCallback)}</StyledFieldset>
      <Button
        userName={userName}
        userEmail={userEmail}
        isDisabledBtn={isDisabledBtn}
      />
    </form>
  );
};

export default UserForm;
