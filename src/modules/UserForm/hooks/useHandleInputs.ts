import { useState, useEffect } from 'react';

const useHandleInputs = () => {
  const refsInputs: HTMLInputElement[] = [];
  const setRef = (elem: HTMLInputElement) => {
    refsInputs.push(elem as HTMLInputElement);
  };
  const [isSuccessSendingEmail, setSuccessSendingEmail] = useState<boolean | null>(null);

  const onFocusFirstInput = () => {
    refsInputs[0].focus();
  };

  useEffect(() => {
    onFocusFirstInput();
  }, []);

  useEffect(() => {
    const timerId = setTimeout(() => setSuccessSendingEmail(null), 7000);

    return () => {
      clearTimeout(timerId);
    };
  }, [isSuccessSendingEmail]);

  return {isSuccessSendingEmail, setSuccessSendingEmail, setRef}
};

export default useHandleInputs;
