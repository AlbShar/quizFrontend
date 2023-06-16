import {
  useState,
  useCallback,
  useMemo,
  FocusEvent,
  KeyboardEvent,
} from 'react';
import { setAnimateInputAndText } from '../helpers/setAnimateInputAndText';

const useValidateEmail = () => {
  const [valueEmail, setValueEmail] = useState<string>('');
  const [isEmailValidation, setIsEmailValidation] = useState<boolean>(false);
  const [isFirstRenderEmail, setIsFirstRenderEmail] = useState<boolean>(true);
  const warningMessageEmail = 'Введите корректный E-mail';

  const getLengthDomain = useMemo((): number => {
    const domain: string[] = [];
    const arrayEmail = valueEmail.split('');
    const indexDog = arrayEmail.indexOf('@');
    const indexDot = arrayEmail.indexOf('.');

    for (let i = indexDog + 1; i < indexDot; i++) {
      domain.push(arrayEmail[i]);
    }

    return domain.join('').length;
  }, [valueEmail]);

  const getLengthNameEmail = useMemo((): number => {
    const domain: string[] = [];
    const arrayEmail = valueEmail.split('');
    const indexDog = arrayEmail.indexOf('@');

    for (let i = 0; i < indexDog; i++) {
      domain.push(arrayEmail[i]);
    }

    return domain.join('').length;
  }, [valueEmail]);

  const isEmailInvalid = useMemo((): boolean => {
    const minLengthEmail = 7;
    const maxLengthEmail = 64;
    const minLengthDomain = 1;
    const maxLengthDomain = 31;
    const minLengthUserNameEmail = 1;
    const maxLengthUserNameEmail = 32;

    // const forbiddenSymbols = /[~!@#$%^&*()+`'"\";:<>/\\|]/;
    // const hasForbiddenSymbols = forbiddenSymbols.test(valueUserName);
    const isInvalidLength =
      valueEmail.length < minLengthEmail || valueEmail.length > maxLengthEmail;
    const isInvalidLengthDomain =
      getLengthDomain < minLengthDomain || getLengthDomain > maxLengthDomain;
    const isInvalidLengthUserNameEmail =
      getLengthNameEmail < minLengthUserNameEmail ||
      getLengthNameEmail > maxLengthUserNameEmail;

    return (
      isInvalidLength ||
      isInvalidLengthUserNameEmail ||
      isInvalidLengthDomain ||
      !valueEmail.includes('@') ||
      !valueEmail.includes('.')
    );
  }, [valueEmail]);

  const onValidateInputEmail = useCallback(
    (e: FocusEvent<HTMLInputElement> | KeyboardEvent<HTMLInputElement>) => {
      if (isFirstRenderEmail) {
        setIsFirstRenderEmail(false);
      }

      if (isEmailInvalid) {
        setIsEmailValidation((_) => false);
        setAnimateInputAndText(e, 'red');
      } else {
        setIsEmailValidation((_) => true);
      }
    },
    [valueEmail, isFirstRenderEmail, isEmailInvalid],
  );

  const hideErrorInputEmail = useCallback(
    (e: FocusEvent<HTMLInputElement> | KeyboardEvent<HTMLInputElement>) => {
      if (!isEmailInvalid) {
        setIsEmailValidation(true);
        setAnimateInputAndText(e, '#6768d7');
      }
    },
    [isEmailValidation, valueEmail],
  );

  return {
    valueEmail,
    isFirstRenderEmail,
    isEmailValidation,
    warningMessageEmail,
    setValueEmail,
    hideErrorInputEmail,
    onValidateInputEmail,
  };
};

export default useValidateEmail;
