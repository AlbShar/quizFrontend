import styled from "styled-components";


export const StyledImg = styled.img`
  width: ${({ header }) => (header ? "140px" : "86px")};
  height: ${({ header }) => (header ? "68px" : "42px")};
`;