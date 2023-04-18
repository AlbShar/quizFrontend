import styled from "styled-components";

interface IFlexWrapper{
  gap?: number;
  widthFlexStart?: number;
}

const StyledFlexWrapper = styled.div<IFlexWrapper>`
  gap: ${({gap}) => gap ? (gap + "px") : ""};
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

export { StyledFlexWrapper };
