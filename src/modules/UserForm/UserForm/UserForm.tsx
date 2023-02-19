import {useState, ChangeEvent} from "react";
import InputField from "../UI/InputField/InputField";
import Select from "../UI/Select/Select";
import Button from "../UI/Button/Button";
import { useTranslation } from "react-i18next";
import {
    StyledSpan,
    StyledPForm,
    StyledFieldset,
    StyledInputRadio,
    StyledImgGender,
    StyledDivWrapperGender,
    StyledSpanGender,
    StyledLabelGender,
  } from "./UserForm.Styled";
  const womanavatar = require("../icons/womanavatar.png") ;
  const manavatar = require("../icons/manavatar.png") ;

const UserForm = () => {
    interface IValueInput  {
      userName: string ;
      userEmail: string ;
      userAge: string ;
    };

    const { t } = useTranslation();
    const [valueInput, setValueInput] = useState<IValueInput>({userName: '', userEmail: '', userAge: '< 18'});
    const onValueInput = (e: ChangeEvent<HTMLInputElement>) => {
      const target = e.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      setValueInput((valueInput) => ({...valueInput, [name]: value}));
      console.log(valueInput);
    };
  return (
    <form>
      <StyledFieldset>
        <StyledPForm>
          <label htmlFor="username">
            <StyledSpan>{t("Ваше_имя")}</StyledSpan>
            <InputField
              placeholder="Ваше_имя"
              type="text"
              id="username"
              name="userName"
              value={valueInput.userName}
              onChange={onValueInput}
            />
          </label>
        </StyledPForm>
        <StyledPForm>
          <label htmlFor="username">
            <StyledSpan>E-mail</StyledSpan>
            <InputField
              placeholder="E-mail"
              type="email"
              id="useremail"
              name="userEmail"
              value={valueInput.userEmail}
              onChange={onValueInput}

            />
          </label>
        </StyledPForm>
        <StyledPForm>
          <label htmlFor="username">
            <StyledSpan>{t("Возраст")}</StyledSpan>
            <Select value={valueInput.userAge} onChange={onValueInput}/>
          </label>
        </StyledPForm>
        <StyledDivWrapperGender>
          <StyledSpanGender>{t("Пол")}</StyledSpanGender>
          <StyledLabelGender>
            <StyledInputRadio
              name="gender"
              id="userman"
              value="man"
              defaultChecked
            />
            <StyledImgGender src={manavatar} />
          </StyledLabelGender>
          <StyledLabelGender>
            <StyledInputRadio name="gender" id="userwoman" value="woman" />
            <StyledImgGender src={womanavatar} />
          </StyledLabelGender>
        </StyledDivWrapperGender>
      </StyledFieldset>
      <Button/> 
    </form>
  );
};

export default UserForm;
