import './link.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MouseEvent } from 'react';

import { StyledButton } from './LinkBtn.Styled';

type LinkBtnProps = {
  text: string;
  id?: string;
  pageTo: string;
  onClick?: (e: MouseEvent) => void;
  isDisabledBtn?: boolean;
};
const LinkBtn = ({
  text,
  pageTo,
  onClick,
  id,
  isDisabledBtn,
}: LinkBtnProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Link className='btn__link' to={pageTo} onClick={onClick} id={id}>
      <StyledButton disabled={isDisabledBtn}>{text}</StyledButton>
    </Link>
  );
};

export default LinkBtn;
