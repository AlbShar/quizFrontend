import React from "react";
import "./link.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { StyledButton } from "./LinkBtn.Styled";

const LinkBtn = ({ children, pageTo, someAction }) => {
  const { t } = useTranslation();

  return (
    <Link className="btn__link" to={pageTo} onClick={someAction}>
      <StyledButton >{t(children)}</StyledButton>
    </Link>
  );
};

export default LinkBtn;
