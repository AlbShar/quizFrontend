import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {Portal} from 'components/Portal/Portal';
import {Logo} from 'components/Logo/Logo';
import {Container} from 'components/Container/Container';
import burger_menu from 'assets/images/burger_menu.svg';

import DropdownLanguages from '../components/DropdownLanguages/DropdownLanguages';
import TotalTested from '../components/TotalTested/TotalTested';
import Menu from '../UI/Menu/Menu';
import List from '../UI/List/List';

import {
  StyledFlexTopHeader,
  StyledFlexBottomHeader,
  StyledHeader,
  StyledFlexSection,
  StyledImg,
  StyledListWrapper,
} from './Header.styled';

type HeaderProps = {
  isChooseProfession: boolean;
};

const Header = ({ isChooseProfession }: HeaderProps): JSX.Element => {
  const [isShowBurger, setShowBurger] = useState(true);
  const [isShowList, setShowList] = useState(false);
  const [isShowMenu, setShowMenu] = useState(false);
  const { pathname } = useLocation();

  const displayBurgerDependsOnScreenSize = () => {
    if (window.innerWidth > 1299.8) {
      setShowBurger(false);
      setShowList(true);
    } else {
      setShowBurger(true);
      setShowList(false);
    }
  };

  const displayBurgerAndListDependsOnPage = () => {
    if (
      pathname.includes('quiz') ||
      pathname.includes('results') ||
      pathname.includes('feedback')
    ) {
      setShowList(false);
      setShowBurger(false);
    } 
  };

  useEffect(() => {
    displayBurgerAndListDependsOnPage();
  }, [pathname]);

  useEffect(() => {
    displayBurgerDependsOnScreenSize();
    displayBurgerAndListDependsOnPage();

    window.addEventListener('resize', displayBurgerDependsOnScreenSize);
    return () => {
      window.removeEventListener('resize', displayBurgerDependsOnScreenSize);
    };
  }, []);

  const onClickBurgerMenu = () => {
    setShowMenu(true);
  };

  const onClickCloseBtn = () => {
    setShowBurger(true);
    setShowMenu(false);
  };

  return (
    <>
      <StyledHeader id="header">
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
