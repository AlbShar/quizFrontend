import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import Container from '../../../components/Container/Container';
import Logo from '../../../components/Logo/Logo';
import { StyledFlexWrapper } from '../../../styles/FlexWrapper.Styled';
import TotalTested from '../components/TotalTested/TotalTested';
import Header from '../../../components/Header/Header';
import DropdownLanguages from '../components/DropdownLanguages/DropdownLanguages';

const HeaderHome: FC = () => {
  return (
    <>
      <Header>
        <Container>
          <StyledFlexWrapper>
            <Logo location='header' />
            <DropdownLanguages />
          </StyledFlexWrapper>
          <TotalTested />
        </Container>
      </Header>
      <Outlet />
    </>
  );
};
export default HeaderHome;
