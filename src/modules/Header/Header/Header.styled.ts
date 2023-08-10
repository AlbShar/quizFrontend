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

const StyledUl = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  gap: 10px;

  @media screen and (min-width: 767.8px) {
      display: flex;
      justify-content: flex-start;
      align-items: center;
  }

  @media screen and (min-width: 1023.8px) {
    gap: 54px;
  }
}`;

const StyledLi = styled.li`
  cursor: pointer;
  color: #000;
  font: var(--font-button);
}`;



export { StyledFlexWrapper, StyledHeader, StyledUl, StyledLi };
