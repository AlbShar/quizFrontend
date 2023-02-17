import styled from "styled-components";

interface LogoImg {
  location: string;
}

export const StyledImg = styled.img<LogoImg>`
  width: 86px;
  height: 42px;

  @media screen and (min-width: 767.8px) {
    width: ${({ location }) => (location === 'header' ? "140px" : "113px")};
    height: ${({ location }) => (location === 'header'  ? "68px" : "55px")};  
  }
`;