import React, {FC} from "react";
import Container from "../../../components/Container/Container";
import Dropdown from "../UI/Dropdown/Dropdown";
import Logo from "../../../components/Logo/Logo";
import { Outlet } from "react-router-dom";
import { HeaderStyled } from "./Header.Styled";
import { StyledFlexWrapper } from "../../../styles/FlexWrapper.Styled";
import TotalTested from "../components/TotalTested/TotalTested";

const Header: FC = () => {
  return (
    <>
      <HeaderStyled>
        <Container>
          <StyledFlexWrapper>
            <Logo location="header" />
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
