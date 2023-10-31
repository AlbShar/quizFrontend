import { Outlet } from 'react-router-dom';

import { Portal } from 'components/portal';
import { Logo } from 'components/logo';
import { Container } from 'components/container';
import burger_menu from 'assets/images/modules/header/burger_menu.svg';

import DropdownLanguages from '../components/dropdownLanguages/dropdownLanguages';
import TotalTested from '../components/totalTested/totalTested';
import { Menu } from '../UI/menu';
import { List } from '../UI/list';
import { useDisplayItemsHeader } from '../hooks/useDisplayItemsHeader';
import {
  StyledFlexBottomHeader,
  StyledHeader,
  StyledFlexSection,
  StyledImg,
} from '../header/header.styled';

type HeaderProps = {
  isChooseProfession: boolean;
};

const Header = ({ isChooseProfession }: HeaderProps): JSX.Element => {
  const { isShowBurger, isShowList, isShowMenu, setShowMenu, setShowBurger } =
    useDisplayItemsHeader();

  const onClickBurgerMenu = () => {
    setShowMenu(true);
  };

  const onClickCloseBtn = () => {
    setShowBurger(true);
    setShowMenu(false);
  };

  return (
    <>
      <StyledHeader id='header'>
        <Container>
          <StyledFlexSection>
            <Logo location='header' />
            {isShowBurger && (
              <StyledImg
                src={burger_menu}
                alt='menu'
                onClick={onClickBurgerMenu}
              />
            )}
            {isShowList && <List />}
            {isShowMenu && (
              <Portal>
                <Menu onClickCloseBtn={onClickCloseBtn} />
              </Portal>
            )}
            <StyledFlexBottomHeader>
              <TotalTested isChooseProfession={isChooseProfession} />
              <DropdownLanguages />
            </StyledFlexBottomHeader>
          </StyledFlexSection>
        </Container>
      </StyledHeader>
      <Outlet />
    </>
  );
};
export default Header;
