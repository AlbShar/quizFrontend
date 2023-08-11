import close_btn from "../../../../assets/images/close_btn.svg"
import List from '../List/List';

import { StyledArticle } from './Menu.Styled';

type MenuProps = {
  onClickCloseBtn: () => void;
};

const Menu = ({ onClickCloseBtn }: MenuProps) => {

  return (
    <StyledArticle>
      <div style={{ textAlign: 'right' }}>
        <img src={close_btn} alt='close' onClick={onClickCloseBtn}></img>
      </div>
      <List onClickCloseBtn={onClickCloseBtn} />
    </StyledArticle>
  );
};

export default Menu;