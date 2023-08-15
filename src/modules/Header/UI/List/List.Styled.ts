import styled from 'styled-components';

const StyledUl = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  gap: 10px;
  font: var(--font-text7);


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
  color: var(--color-white);
  margin: 0 0 13px 0;

  @media screen and (min-width: 767.8px) {
    margin: 0;
  }

  &:hover {
    color: var(--color-purple)
  }
}`;

export { StyledUl, StyledLi };
