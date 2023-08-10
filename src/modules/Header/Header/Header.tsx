import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Container from '../../../components/Container/Container';
import DropdownLanguages from '../components/DropdownLanguages/DropdownLanguages';
import Logo from '../../../components/Logo/Logo';
import TotalTested from '../components/TotalTested/TotalTested';

import {
  StyledFlexWrapper,
  StyledHeader,
  StyledUl,
  StyledLi,
} from './Header.styled';
import "./link.css";

type HeaderProps = {
   isChooseProfession: boolean
};

const Header = ({ isChooseProfession }: HeaderProps): JSX.Element => {
  return (
    <>
      <StyledHeader>
        <Container>
          <StyledFlexWrapper>
            <Logo location='header' />
            <StyledUl>
              <StyledLi>
                <Link to='/feedback' className='link'>Обратная связь</Link>
              </StyledLi>
              <StyledLi>Команда</StyledLi>
              <StyledLi>Правила</StyledLi>
            </StyledUl>
            <StyledFlexWrapper gap={37}>
              <TotalTested isChooseProfession={isChooseProfession} />
              <DropdownLanguages />
            </StyledFlexWrapper>
          </StyledFlexWrapper>
        </Container>
      </StyledHeader>
      <Outlet />
    </>
  );
};
export default Header;
