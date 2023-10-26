import close_btn from "assets/images/close_btn.svg"

import { List } from 'modules/header/UI/list';

import { StyledArticle } from './menu.Styled';

type MenuProps = {
  onClickCloseBtn: () => void;
};

export const Menu = ({ onClickCloseBtn }: MenuProps) => {

  return (
    <StyledArticle>
      <div style={{ textAlign: 'right' }}>
        <img src={close_btn} alt='close' onClick={onClickCloseBtn}></img>
      </div>
      <List onClickCloseBtn={onClickCloseBtn} />
    </StyledArticle>
  );
};

