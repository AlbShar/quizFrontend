import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import Container from '../../../components/Container/Container';
import DropdownLanguages from '../components/DropdownLanguages/DropdownLanguages';
import Logo from '../../../components/Logo/Logo';
import TotalTested from '../components/TotalTested/TotalTested';
import burger_menu from '../../../assets/images/burger_menu.svg';
import Menu from '../UI/Menu/Menu';
import Portal from '../../../components/Portal/Portal';

import {
  StyledFlexArticle,
  StyledHeader,
  StyledFlexSection,
  StyledImg,
  StyledListWrapper,
} from './Header.styled';
import List from '../UI/List/List';

type HeaderProps = {
  isChooseProfession: boolean;
};

const Header = ({ isChooseProfession }: HeaderProps): JSX.Element => {
  const [isShowBurger, setShowBurger] = useState(true);
  const [isShowMenu, setShowMenu] = useState(false);

   useEffect(() => {
     const handleResize = () => {
      if (window.innerWidth > 767.8) {
        setShowBurger(false);
      } else {
        setShowBurger(true);
      }
     };

     window.addEventListener('resize', handleResize);

     return () => {
       window.removeEventListener('resize', handleResize);
     };
   }, []);

  const onClickBurgerMenu = () => {
    setShowBurger(false);
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
            <StyledFlexArticle>
              <Logo location='header' />
              {isShowBurger ? (
                <StyledImg
                  src={burger_menu}
                  alt='menu'
                  onClick={onClickBurgerMenu}
                />
              ) : <List/>}
              {isShowMenu && (
                <Portal>
                  <Menu onClickCloseBtn={onClickCloseBtn} />
                </Portal>
              )}
            </StyledFlexArticle>
            <StyledFlexArticle gap={22}>
              <TotalTested isChooseProfession={isChooseProfession} />
              <DropdownLanguages />
            </StyledFlexArticle>
          </StyledFlexSection>
        </Container>
      </StyledHeader>
      <Outlet />
    </>
  );
};
export default Header;
