import { useState, useCallback, useMemo, FocusEvent, KeyboardEvent } from "react";
import { setAnimateInputAndText } from "../helpers/setAnimateInputAndText";

const useValidateName = () => {
  const [valueUserName, setValueUserName] = useState<string>("");
  const [isNameValidation, setIsNameValidation] = useState<boolean>(false);
  const [isFirstRenderName, setIsFirstRenderName] = useState<boolean>(true);
  const requeirmentsValueName = "Запрещены спец. символы за исключением дефиса, длина поля - 20-30 символов"; 


  const isNameInvalid  = useMemo((): boolean => {
    const minValue = 2;
    const maxValue = 30;
    const forbiddenSymbols = /[~!@#$%^&*()+`'"\";:<>/\\|]/;
    const isInvalidLength = valueUserName.length < minValue || valueUserName.length > maxValue;     
    const hasForbiddenSymbols = forbiddenSymbols.test(valueUserName);  

    return isInvalidLength || hasForbiddenSymbols;
  }, [valueUserName]);

  const hideErrorInputName = (e: FocusEvent<HTMLInputElement> | KeyboardEvent<HTMLInputElement>) => {
    if (!isNameInvalid) {
      setIsNameValidation(true);
      setAnimateInputAndText(e, "#6768d7");
    }
  };

  const onValidateInputName = useCallback(
    (e: FocusEvent<HTMLInputElement> | KeyboardEvent<HTMLInputElement>) => {
      if (isFirstRenderName || valueUserName !== "") {
        setIsFirstRenderName(false);
        setAnimateInputAndText(e, "#81868C");
      } 

      if (isNameInvalid) {
        setIsNameValidation(false);
        setAnimateInputAndText(e, "red");
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
