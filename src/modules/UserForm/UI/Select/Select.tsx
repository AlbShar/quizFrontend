import {FC, FocusEvent, ChangeEvent} from "react";
import { setAnimateInputAndText } from "../../helpers/setAnimateInputAndText";
import { clearAnimateInputAndText } from "../../helpers/clearAnimateInputAndText";
import { StyledSelect } from "./Select.Styled";

interface ISelect {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
const Select: FC<ISelect> = ({value, onChange}) => {
  return (
    <StyledSelect
      onFocus={(e: FocusEvent<HTMLSelectElement, Element>) => {
        setAnimateInputAndText(e, "#6768d7");
      }}
      onBlur={(e: FocusEvent<HTMLSelectElement, Element>) => {
        clearAnimateInputAndText(e, "#81868C");
      }}
      value={value}
      onChange={onChange}
      name="userAge"
    >
      <option disabled>Возраст</option>
      <option value="<18"> &lt; 18 </option>
      <option value="19-25">19-25</option>
      <option value="26-35">26-35</option>
      <option value="36-50">36-50</option>
      <option value="50+">50+</option>
    </StyledSelect>
  );
};

export default Select;
