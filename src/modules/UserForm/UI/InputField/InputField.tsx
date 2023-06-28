import { FC, ChangeEvent, memo, FocusEvent, KeyboardEvent } from 'react';
import { useTranslation } from 'react-i18next';

import { setAnimateInputAndText } from '../../helpers/setAnimateInputAndText';
import { clearAnimateInputAndText } from '../../helpers/clearAnimateInputAndText';

import { StyledInputField } from './InputField.Style';

type InputFieldProps = {
  type: string;
  id: string;
  name: string;
  placeholder: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  setRefs: (elem: HTMLInputElement) => void;
  onError: (
    e: FocusEvent<HTMLInputElement> | KeyboardEvent<HTMLInputElement>,
  ) => void;
  onValidateInput: (
    e: FocusEvent<HTMLInputElement> | KeyboardEvent<HTMLInputElement>,
  ) => void;
  isValueValidate: boolean;
  isFirstRender: boolean;
  keyHint: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send';
}

const InputField: FC<InputFieldProps> = ({
  isFirstRender,
  isValueValidate,
  type,
  id,
  setRefs,
  name,
  placeholder,
  onChange,
  value,
  onError,
  keyHint,
  onValidateInput,
}) => {
  const { t } = useTranslation();
  const autocompleteValue = id === 'email' ? 'username' : 'on';

  return (
    <StyledInputField
      required
      autoComplete={autocompleteValue}
      enterKeyHint={keyHint}
      ref={setRefs}
      type={type}
      id={id}
      name={name}
      value={value}
      placeholder={t(placeholder) || 'Placeholder'}
      onFocus={(e: FocusEvent<HTMLInputElement>) => {
        if (e.target.type === 'email' || isFirstRender || isValueValidate) {
          setAnimateInputAndText(e, '#6768d7');
        }
      }}
      onBlur={(e: FocusEvent<HTMLInputElement>) => {
        clearAnimateInputAndText(e, '#81868C');
        onValidateInput(e);
      }}
      onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
        const key = e.key;
        if (key === 'Tab') {
          onValidateInput(e);
        }
      }}
      onKeyUp={(e: KeyboardEvent<HTMLInputElement>) => {
        const key = e.key;
        if (key === 'Backspace' || key === 'Delete') {
          onError(e);
        }
      }}
      onChange={onChange}
      onInput={onError}
    ></StyledInputField>
  );
};

export default memo(InputField);
