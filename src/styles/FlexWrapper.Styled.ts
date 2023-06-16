import styled from 'styled-components';

interface IFlexWrapper {
  gap?: number;
  widthFlexStart?: number;
  jc?:
    | 'start'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'flex-start'
    | 'flex-end';
}

const StyledFlexWrapper = styled.div<IFlexWrapper>`
  gap: ${({ gap }) => (gap ? gap + 'px' : '')};
  ${function ({ widthFlexStart, jc = 'space-between' }) {
    if (!widthFlexStart) {
      return `
            display: flex;
            justify-content: ${jc};
            align-items: center;
            `;
    } else {
      return `
      position: relative;
      @media screen and (min-width: ${widthFlexStart}px) {
        display: flex;
        justify-content: ${jc};
        align-items: center;
        width: 100%;
      }
      `;
    }
  }}
`;

export { StyledFlexWrapper };
