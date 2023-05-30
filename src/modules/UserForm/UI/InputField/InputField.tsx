import {FC, ChangeEvent, memo, FocusEvent} from "react";
import { useTranslation } from "react-i18next";

import { setAnimateInputAndText } from "../../helpers/setAnimateInputAndText";
import { clearAnimateInputAndText } from "../../helpers/clearAnimateInputAndText";

import { StyledInputField } from "./InputField.Style";



interface InputFieldProps {
  type: string ;
  id: string ;
  name: string ;
  placeholder: string ;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  setRefs: (elem: HTMLInputElement) => void;
  onError: () => void,
  onValidateInput: (e) => void,
}

const InputField: FC<InputFieldProps> = ({ type, id, setRefs, name, placeholder, onChange, value, onError, onValidateInput }) => {
    const { t } = useTranslation();
    const autocompleteValue = id === "email" ? "username" : "on";

    return (
    <StyledInputField
      autoComplete={autocompleteValue}
      ref={setRefs}
      type={type}
      id={id}
      name={name}
      value={value}
      placeholder={t(placeholder) || "Placeholder"}
      onFocus={(e: FocusEvent<HTMLInputElement>) => {
        setAnimateInputAndText(e, "#6768d7");
      }}
      onBlur={(e: FocusEvent<HTMLInputElement>) => {
        clearAnimateInputAndText(e, "#81868C");
        onValidateInput(e);
      }}
      onKeyDown={(e) => {
        const key = e.key;
        if (key === 'Tab') {
          onValidateInput(e);
        }
      }}
      onKeyUp={(e) => {
        const key = e.key;
        if (key === "Backspace" || key === "Delete") {
          onValidateInput(e);
        }
      }
      }
      onChange={onChange}
      onInput={onError}
    ></StyledInputField>
  );
};

export default memo(InputField);
