import {FC} from "react";
import "./link.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { StyledButton } from "./LinkBtn.Styled";
import { MouseEvent } from "react";

interface LinkInt {
  text: string,
  id?: string,
  pageTo: string,
  onClick?: (e: MouseEvent) => void
}
const LinkBtn: FC<LinkInt> = ({ text, pageTo, onClick, id }) => {
  const { t } = useTranslation();

  return (
    <Link className="btn__link" to={pageTo} onClick={onClick} id={id}>
      <StyledButton >{t(text)}</StyledButton>
    </Link>
  );
};

export default LinkBtn;
