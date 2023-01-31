import React from "react";
import Container from "../../../components/Container";
import Dropdown from "../UI/Dropdown/Dropdown";
import Logo from "../../../components/Logo";
import { Outlet } from "react-router-dom";
import { HeaderStyled } from "./Header.Styled";
import { StyledFlexWrapper } from "../../../components/styles/FlexWrapper.Styled";
import TotalTested from "../components/TotalTested/TotalTested";

const Header = () => {
  return (
    <>
      <HeaderStyled>
        <Container>
          <StyledFlexWrapper>
            <Logo head />
              <Dropdown />
          </StyledFlexWrapper>
          <TotalTested/>
        </Container>
      </HeaderStyled>
      <Outlet />
    </>
  );
};
 export default Header;
