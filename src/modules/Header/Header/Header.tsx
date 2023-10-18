import { Outlet } from 'react-router-dom';

import { Portal } from 'components/Portal/Portal';
import { Logo } from 'components/Logo/Logo';
import { Container } from 'components/Container/Container';
import burger_menu from 'assets/images/burger_menu.svg';

import DropdownLanguages from '../components/DropdownLanguages/DropdownLanguages';
import TotalTested from '../components/TotalTested/TotalTested';
import {Menu} from '../UI/Menu';
import {List} from '../UI/List';
import { useDisplayItemsHeader } from '../hooks/useDisplayItemsHeader';

import {
  StyledFlexBottomHeader,
  StyledHeader,
  StyledFlexSection,
  StyledImg,
} from './Header.styled';

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
