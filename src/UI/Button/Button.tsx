import {FC} from "react";
import { useTranslation } from "react-i18next";
import {
  StyledButton,
} from "./Button.Styled";

interface Btn {
 text: string,
 action: () => void
}
const Button: FC<Btn> = ({
  text, action
}) => {
  const { t } = useTranslation();

  return <StyledButton onClick={() => {
    action();
  }}>{t(text)}</StyledButton>;
};

export default Button;
