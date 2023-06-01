import { useState, useCallback, useMemo } from "react";

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


  const isNameInvalid  = useMemo((): boolean => {
    const minValue = 2;
    const maxValue = 30;
    const forbiddenSymbols = /[-~!@#$%^&*()+`'"\";:<>/\\|]/;
    const isInvalidLength = valueUserName.length < minValue || valueUserName.length > maxValue;     
    const hasForbiddenSymbols = forbiddenSymbols.test(valueUserName);  

    console.log(isInvalidLength, hasForbiddenSymbols);
        
    return isInvalidLength || hasForbiddenSymbols;
  }, [valueUserName]);

  const onValidateInputName = useCallback(
    () => {
      if (isFirstRenderName || valueUserName !== "") {
        setIsFirstRenderName(false);
      } 

      if (isNameInvalid) {
        console.log('Невалидно имя')
        setIsNameValidation(false);
      } else {
        console.log('Валидное имя')
        setIsNameValidation(true);
      }
    },
    [isFirstRenderName, valueUserName, isNameValidation]
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
