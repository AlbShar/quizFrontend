import { useState, useCallback } from "react";

const useValidateEmail = () => {
    const [valueEmail, setValueEmail] = useState<string>("");
    const [isEmailValidation, setIsEmailValidation] = useState<boolean>(false);
    const [isFirstRenderEmail, setIsFirstRenderEmail] = useState<boolean>(true);
    const requeirmentsValueEmail = "Обязательно должны присутствовать символы '.', '@'."; 


    const onValidateInputEmail = useCallback(() => {
        if (isFirstRenderEmail) {
          setIsFirstRenderEmail(false);
        }
    
        if (valueEmail.length < 7 || valueEmail.length > 64 || !valueEmail.includes("@")) {
          setIsEmailValidation((_) => false);
        }
      }, [valueEmail, isFirstRenderEmail]);
    
      const hideErrorInputEmail = useCallback(() => {
        if (!isEmailValidation && valueEmail.length > 7 && valueEmail.length < 64) {
          setIsEmailValidation(true);
        }
      }, [isEmailValidation, valueEmail]);

      return {valueEmail, isFirstRenderEmail, isEmailValidation, setValueEmail, hideErrorInputEmail, onValidateInputEmail}
};

export default useValidateEmail;