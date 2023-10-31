import { Link } from 'react-router-dom';
import { MouseEvent } from 'react';
import './styles/link.css';

import { StyledButton } from './styles/nextPageButton.Styled';

type LinkBtnProps = {
  text: string;
  id?: string;
  pageTo: string;
  onClick?: (e: MouseEvent) => void;
  isDisabledBtn?: boolean;
};

export const NextPageButton = ({
  text,
  pageTo,
  onClick,
  id,
  isDisabledBtn,
}: LinkBtnProps): JSX.Element => {
  const matchResult = pageTo.match(/\/(\w+)/);
  let pageName: 'results' | 'quiz' | 'home' = 'home';

  if (matchResult && matchResult[1]) {
    pageName = matchResult[1] as 'results' | 'quiz';
  }

  return (
    <Link className='btn__link' to={pageTo} onClick={onClick} id={id}>
      <StyledButton disabled={isDisabledBtn} pageName={pageName}>
        {text}
      </StyledButton>
    </Link>
  );
};
