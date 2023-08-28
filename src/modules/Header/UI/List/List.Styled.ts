import styled from 'styled-components';

const StyledUl = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  gap: 10px;
  font: var(--font-text7);


  @media screen and (min-width: 767.8px) {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: flex-start;
      font: var(--font-text6);
  }

  @media screen and (min-width: 1023.8px) {
    gap: 24px;
    flex-direction: row;
  }

}`;

const StyledLink = styled.a`
  text-decoration: none;
  color: var(--color-white);

  &:visited {
    color: var(--color-white);
  }

  &:hover {
    color: var(--color-purple);
  }
`;

const StyledLi = styled.li`
  cursor: pointer;
  margin: 0 0 13px 0;

  @media screen and (min-width: 767.8px) {
    margin: 0;
    width: 100%;
    text-align: left;

  }

  @media screen and (min-width: 1023.8px) {
    margin: 0;
    width: auto;
  }

 
}`;

export { StyledUl, StyledLi, StyledLink };
