import styled from "styled-components";

const ImageStyled = styled.img`
  display: block;
  width: 100%;
  max-width: 1129px;
  margin: 13px auto 0 auto;

  @media screen and (min-width: 459.8px) {
    margin: 26px auto 0 auto;
  }
`;

const LogoImage = styled.img`
  width: ${({ location }) => (location === "header" ? "140px" : "86px")};
  height: ${({ location }) => (location === "header" ? "68px" : "42px")};
`;

const IconStyled = styled(ImageStyled)`
  width: 18px;
  height: 18px;
  margin: 0 8px 0 0;
`;

const IconFooterPaymentStyled = styled.img`
  @media screen and (min-width: 767.8px) {
    margin: 0 10px 0 0;
  }
  @media screen and (min-width: 1023.8px) {
    &:not(:last-child) {
      margin: 0 10px 0 0;
  }
  }
`;

const IconFooterNetworkStyled = styled.img`
@media screen and (min-width: 767.8px) {
  &:not(:last-child) {
    margin: 0 10px 0 0;
  }

  @media screen and (min-width: 1023.8px) {
        width: 24px;
        height: 24px;
    }
}
`;

export { ImageStyled, IconStyled, LogoImage, IconFooterPaymentStyled, IconFooterNetworkStyled  };
