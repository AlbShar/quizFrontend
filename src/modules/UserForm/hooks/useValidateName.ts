import { useState, useCallback } from "react";

const useValidateName = () => {
    const [valueUserName, setValueUserName] = useState<string>("");
    const [isNameValidation, setIsNameValidation] = useState<boolean>(false);
    const [isFirstRenderName, setIsFirstRenderName] = useState<boolean>(true);

    const hideErrorInputName = useCallback(() => {
        if (!isNameValidation && valueUserName.length > 2 && valueUserName.length < 50) {
            setIsNameValidation(true);
        }
      }, [isNameValidation, valueUserName]);

      const onValidateInputName = useCallback((e) => {
        if (isFirstRenderName) {
            setIsFirstRenderName((_) => false);
        }
    
        if (valueUserName.length < 2 || valueUserName.length > 50) {
            setIsNameValidation((_) => false);
        }
      }, [valueUserName, isFirstRenderName]);

      return {valueUserName, isFirstRenderName, isNameValidation, setValueUserName, hideErrorInputName, onValidateInputName}
};

export default useValidateName;