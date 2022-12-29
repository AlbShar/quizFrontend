import styled from "styled-components";


export const StyledImg = styled.img`
  width: 86px;
  height: 42px;

  @media screen and (min-width: 767.8px) {
    width: ${({ header }) => (header ? "140px" : "113px")};
    height: ${({ header }) => (header ? "68px" : "55px")};  
  }
`;