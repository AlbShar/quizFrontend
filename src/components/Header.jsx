import React from "react";
import Container from "./Container";
import Dropdown from "./UI/Dropdown";
import Logo from "./Logo";
import { Outlet } from "react-router-dom";
import { HeaderStyled } from "./styles/Header.Styled";
import { StyledFlexWrapper } from "./styles/FlexWrapper.Styled";
import TotalTested from "./TotalTested";

const Header = () => {
  return (
    <>
      <HeaderStyled>
        <Container>
          <StyledFlexWrapper>
            <Logo header />
            <StyledFlexWrapper gap="48">
              <TotalTested />
              <Dropdown />
            </StyledFlexWrapper>
          </StyledFlexWrapper>
        </Container>
      </HeaderStyled>
      <Outlet />
    </>
  );
};

export default Header;
