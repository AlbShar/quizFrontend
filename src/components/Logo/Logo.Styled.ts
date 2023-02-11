import styled from "styled-components";

interface LogoImg {
  loc: string;
}

export const StyledImg = styled.img<LogoImg>`
  width: 86px;
  height: 42px;

  @media screen and (min-width: 767.8px) {
    width: ${({ loc }) => (loc === 'header' ? "140px" : "113px")};
    height: ${({ loc }) => (loc === 'header'  ? "68px" : "55px")};  
  }
`;