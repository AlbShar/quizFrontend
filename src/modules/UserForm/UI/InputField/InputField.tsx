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
  refer: RefObject<HTMLInputElement>;
}
const InputField: FC<IInputField> = ({ type, id, refer, name, placeholder, onChange, value }) => {
    const { t } = useTranslation();

    return (
    <StyledInputField
      ref={refer}
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
