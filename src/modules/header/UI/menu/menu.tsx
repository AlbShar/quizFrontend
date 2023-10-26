
import { List } from 'modules/header/UI/list';
import close_btn from "assets/images/modules/header/close_btn.svg"

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

