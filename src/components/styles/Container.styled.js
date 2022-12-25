import styled from "styled-components";

const ContainerStyled = styled.div`
  max-width: 1190px;
  min-width: 287px;
  margin: 0 auto;
  padding: 0 5px;

  ${function ({ flex }) {
    if (flex) {
      return `
            display: flex;
            justify-content: space-between;
            align-items: center;
            `;
    }
  }}
`;

export { ContainerStyled };
