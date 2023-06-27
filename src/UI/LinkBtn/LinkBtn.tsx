import { FC } from 'react';
import './link.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MouseEvent } from 'react';
import { StyledButton } from './LinkBtn.Styled';

interface LinkInt {
  text: string;
  id?: string;
  pageTo: string;
  onClick?: (e: MouseEvent) => void;
  isDisabledBtn?: boolean;
}
const LinkBtn: FC<LinkInt> = ({
  text,
  pageTo,
  onClick,
  id,
  isDisabledBtn,
}) => {
  const { t } = useTranslation();

  return (
    <Link className='btn__link' to={pageTo} onClick={onClick} id={id}>
      <StyledButton disabled={isDisabledBtn}>{t(text)}</StyledButton>
    </Link>
  );
};

export default LinkBtn;
