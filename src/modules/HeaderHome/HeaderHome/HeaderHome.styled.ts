import styled from 'styled-components';

interface FlexWrapper {
    gap?: number;
  }
const StyledFlexWrapper = styled.div<FlexWrapper>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ gap }) => (gap ? gap + 'px' : '')};

`;


export { StyledFlexWrapper };
