import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import Container from '../../../components/Container/Container';
import DropdownLanguages from '../components/DropdownLanguages/DropdownLanguages';
import Logo from '../../../components/Logo/Logo';
import TotalTested from '../components/TotalTested/TotalTested';
import burger_menu from '../../../assets/images/burger_menu.svg';
import Menu from '../UI/Menu/Menu';
import Portal from '../../../components/Portal/Portal';
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
  const [isShowList, setShowList] = useState(true);
  const [isShowMenu, setShowMenu] = useState(false);
  const { pathname } = useLocation();

  const displayBurgerDependsOnScreenSize = () => {
    if (window.innerWidth > 1299.8) {
      setShowBurger(false);
    } else {
      setShowBurger(true);
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
    } else {
      setShowList(true);
      setShowBurger(true);
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
      <StyledHeader>
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
