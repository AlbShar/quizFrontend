import {FC} from "react";
import Container from "../../../components/Container/Container";
import Dropdown from "../UI/Dropdown/Dropdown";
import Logo from "../../../components/Logo/Logo";
import { Outlet } from "react-router-dom";
import { StyledFlexWrapper } from "../../../styles/FlexWrapper.Styled";
import TotalTested from "../components/TotalTested/TotalTested";
import Header from "../../../components/Header/Header";

const HeaderHome: FC = () => {
  return (
    <>
      <Header>
        <Container>
          <StyledFlexWrapper>
            <Logo location="header" />
              <Dropdown />
          </StyledFlexWrapper>
          <TotalTested/>
        </Container>
      </Header>
      <Outlet />
    </>
  );
};
 export default HeaderHome;
