import { FC } from "react";
import Header from "../../../components/Header/Header";
import Logo from "../../../components/Logo/Logo";
import { StyledH1, StyledH2, StyledArticle } from "./HeaderResult.Styled";
import UserInfo from "../components/UserInfo/UserInfo";
import GetCertificate from "../components/GetCertificate/GetCertificate";
import FlexWrapper from "../../../components/FlexWrapper/FlexWrapper";
import Container from "../../../components/Container/Container";

const HeaderResult: FC = () => {
  return (
    <Header>
      <Container>
        <FlexWrapper widthColumnStart={320} widthColumnEnd={767.8}>
          <StyledArticle >
            <Logo location="header" style={{ margin: "0 auto" }} />
            <StyledH1>Поздравляю &#58;&#41;</StyledH1>
            <StyledH2>Вы прошли тест</StyledH2>
          </StyledArticle>
          <FlexWrapper style={{margin: '16px 0 19px 0'}} widthColumnStart={320} widthColumnEnd={767.8} gap={24}>
            <UserInfo />
            <GetCertificate />
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </Header>
  );
};

export default HeaderResult;
