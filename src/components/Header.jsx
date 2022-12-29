import React from "react";
import Container from "./Container";
import Dropdown from "./UI/Dropdown";
import Logo from "./Logo";
import { Outlet } from "react-router-dom";
import { HeaderStyled } from "./styles/Header.Styled";
import { StyledFlexWrapper } from "./styles/FlexWrapper.Styled";

const Header = () => {
  return (
    <>
      <HeaderStyled>
        <Container>
          <StyledFlexWrapper>
            <Logo header/>
            <Dropdown />
          </StyledFlexWrapper>
        </Container>
      </HeaderStyled>
      <Outlet />
    </>
  );
};

export default Header;
