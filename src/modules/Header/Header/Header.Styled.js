import styled from "styled-components";

const HeaderStyled = styled.header`
  background-color: #252b58;
  width: 100%;
  margin: 0 0 34px 0;

  @media screen and (min-width: 459.8px) {
    margin: 0 0 40px 0;
  }
`;
const StyledFlexWrapper = styled.div`
  gap: ${({gap}) => gap ? (gap + 'px') : ""};
  ${function ({ widthFlexStart }) {
    if (!widthFlexStart) {
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
      `;
    }
  }}
`;

export { HeaderStyled, StyledFlexWrapper };
