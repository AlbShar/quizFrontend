import {FC, ChangeEvent, RefObject, FocusEvent} from "react";
import { useTranslation } from "react-i18next";

import { setAnimateInputAndText } from "../../helpers/setAnimateInputAndText";
import { clearAnimateInputAndText } from "../../helpers/clearAnimateInputAndText";

import { StyledInputField } from "./InputField.Style";



interface IInputField {
  type: string ;
  id: string ;
  name: string ;
  placeholder: string ;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  setRefs: (elem: HTMLInputElement) => void;
}
const InputField: FC<IInputField> = ({ type, id, setRefs, name, placeholder, onChange, value }) => {
    const { t } = useTranslation();

    return (
    <StyledInputField
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
      }}
      onChange={onChange}
    ></StyledInputField>
  );
};

export default InputField;
