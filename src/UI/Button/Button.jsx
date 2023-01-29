import React from "react";
import { useTranslation } from "react-i18next";
import {
  StyledButton,
} from "./Button.Styled";

const Button = ({
  children, action
}) => {
  const { t } = useTranslation();

  return <StyledButton onClick={() => {
    action();
  }}>{t(children)}</StyledButton>;
};

export default Button;
