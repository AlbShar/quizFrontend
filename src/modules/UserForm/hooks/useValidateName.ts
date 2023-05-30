import { useState, useCallback } from "react";

const useValidateName = () => {
  const [valueUserName, setValueUserName] = useState<string>("");
  const [isNameValidation, setIsNameValidation] = useState<boolean>(false);
  const [isFirstRenderName, setIsFirstRenderName] = useState<boolean>(true);

  const hideErrorInputName = useCallback(() => {
    if (
      !isNameValidation &&
      valueUserName.length > 2 &&
      valueUserName.length < 50
    ) {
      setIsNameValidation(true);
    }
  }, [isNameValidation, valueUserName]);

  const onValidateInputName = useCallback(
    (e) => {
      const validateUserName = (): boolean => {
        const minValue = 2;
        const maxValue = 30;
        const forbiddenSymbols = '~!@#$%^&*()+`\'";:<>/\\|';
        const regexPattern = '^(?!.*[' + forbiddenSymbols + '])';
        const regex = new RegExp(regexPattern);
        const isValidLength = valueUserName.length >= minValue || valueUserName.length <= maxValue;
      
        console.log(valueUserName.length, valueUserName, regex.test(valueUserName));
      
        const hasForbiddenSymbols = regex.test(valueUserName);
      
        return isValidLength || hasForbiddenSymbols;
      };

      if (isFirstRenderName) {
        setIsFirstRenderName(false);
      } else {
        if (validateUserName()) {
          setIsNameValidation(false);
        } 
      }
    },
    [isFirstRenderName, valueUserName]
  );

  return {
    valueUserName,
    isFirstRenderName,
    isNameValidation,
    setValueUserName,
    hideErrorInputName,
    onValidateInputName,
  };
};

export default useValidateName;
