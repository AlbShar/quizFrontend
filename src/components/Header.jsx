import React from "react";
import Container from "./Container";
import Dropdown from "./UI/Dropdown/Dropdown";
import Logo from "./Logo";
import { Outlet } from "react-router-dom";
import { HeaderStyled } from "./styles/Header.Styled";

const Header = () => {
  return (
    <>
      <HeaderStyled>
        <Container flex={true}>
            <Logo location='header' />
            <Dropdown />
        </Container>
      </HeaderStyled>
      <Outlet />
    </>
  );
};

export default Header;
