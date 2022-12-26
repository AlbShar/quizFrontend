import styled from "styled-components";

const ContainerStyled = styled.div`
  max-width: 1190px;
  min-width: 287px;
  margin: 0 auto;
  padding: 0 5px;

  ${function ({ flex, widthFlexStart }) {
    if (flex && !widthFlexStart) {
      return `
            display: flex;
            justify-content: space-between;
            align-items: center;
            `;
    } else {
      return `
      position: relative;
      @media screen and (min-width: ${widthFlexStart}px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
      }
      `
    }
  }}
`;

export { ContainerStyled };
