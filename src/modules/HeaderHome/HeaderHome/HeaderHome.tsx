import { FC, useState } from 'react';
import { Outlet } from 'react-router-dom';

import Container from '../../../components/Container/Container';
import Logo from '../../../components/Logo/Logo';
import { StyledFlexWrapper } from '../../../styles/FlexWrapper.Styled';
import TotalTested from '../components/TotalTested/TotalTested';
import Header from '../../../components/Header/Header';
import DropdownLanguages from '../components/DropdownLanguages/DropdownLanguages';

type HeaderHomeProps = {
  setNewLang: (item: string) => void
};

const HeaderHome: FC<HeaderHomeProps> = ({setNewLang}) => {
  return (
    <>
      <Header>
        <Container>
          <StyledFlexWrapper>
            <Logo location='header' />
            <StyledFlexWrapper gap={37}>
              <TotalTested />
              <DropdownLanguages setNewLang={setNewLang}/>
            </StyledFlexWrapper>
          </StyledFlexWrapper>
        </Container>
      </Header>
      <Outlet />
    </>
  );
};
export default HeaderHome;
