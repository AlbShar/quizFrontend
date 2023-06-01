import { useState, useCallback, useMemo } from "react";

const useValidateName = () => {
  const [valueUserName, setValueUserName] = useState<string>("");
  const [isNameValidation, setIsNameValidation] = useState<boolean>(false);
  const [isFirstRenderName, setIsFirstRenderName] = useState<boolean>(true);
  const requeirmentsValueName = "Запрещены спец. символы за исключением дефиса, минимальная длина - 2, максимальная - 30 "; 


  const isNameInvalid  = useMemo((): boolean => {
    const minValue = 2;
    const maxValue = 30;
    const forbiddenSymbols = /[~!@#$%^&*()+`'"\";:<>/\\|]/;
    const isInvalidLength = valueUserName.length < minValue || valueUserName.length > maxValue;     
    const hasForbiddenSymbols = forbiddenSymbols.test(valueUserName);  

    console.log(valueUserName.length)
    return isInvalidLength || hasForbiddenSymbols;
  }, [valueUserName]);

  const hideErrorInputName = () => {
    if (!isNameInvalid) {
      console.log('Валидное значение')
      setIsNameValidation(true);
    }
  };

  const onValidateInputName = useCallback(
    () => {
      if (isFirstRenderName || valueUserName !== "") {
        setIsFirstRenderName(false);
      } 

      if (isNameInvalid) {
        setIsNameValidation(false);
      } else {
        setIsNameValidation(true);
      }
    },
    [isFirstRenderName, valueUserName, isNameInvalid]
  );

  return {
    valueUserName,
    isFirstRenderName,
    isNameValidation,
    setValueUserName,
    hideErrorInputName,
    onValidateInputName,
    requeirmentsValueName
  };
};

export default useValidateName;
