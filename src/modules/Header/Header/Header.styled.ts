import styled from 'styled-components';

type FlexWrapper = {
  gap?: number;
};


const StyledFlexWrapper = styled.div<FlexWrapper>`
  display: flex;
  align-items: strech;
  justify-content: space-between;
  gap: ${({ gap }) => (gap ? gap + 'px' : '')};
`;

const StyledHeader = styled.header`
  box-sizing: border-box;
  background: #EEEEFF;
  width: 100%;
  margin: 0 0 12px 0;
  padding: 30px 0;
}
`;

export { StyledFlexWrapper, StyledHeader };
