import { Outlet } from 'react-router-dom';

import Container from '../../../components/Container/Container';
import DropdownLanguages from '../components/DropdownLanguages/DropdownLanguages';
import Logo from '../../../components/Logo/Logo';
import TotalTested from '../components/TotalTested/TotalTested';


import { StyledFlexWrapper, StyledHeader } from './Header.styled';

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
