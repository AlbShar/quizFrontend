import {FC, ChangeEvent} from "react";
import { StyledInputField } from "./InputField.Style";
import { setAnimateInputAndText } from "../../helpers/setAnimateInputAndText";
import { clearAnimateInputAndText } from "../../helpers/clearAnimateInputAndText";
import { useTranslation } from "react-i18next";


interface IInputField {
  type: string ;
  id: string ;
  name: string ;
  placeholder: string ;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
const InputField: FC<IInputField> = ({ type, id, name, placeholder, onChange, value }) => {
    const { t } = useTranslation();

    return (
    <StyledInputField
      type={type}
      id={id}
      name={name}
      value={value}
      placeholder={t(placeholder) || "Placeholder"}
      onFocus={(e) => {
        setAnimateInputAndText(e, "#6768d7");
      }}
      onBlur={(e) => {
        clearAnimateInputAndText(e, "#81868C");
      }}
      onChange={onChange}
    ></StyledInputField>
  );
};

export default InputField;
