import styled from 'styled-components';

const StyledFooter = styled.footer`
  box-sizing: border-box;
  background-color: var(--color-dark);
  padding: 28px 0 170px;
  margin: 10px 0 0 0;

  @media screen and (min-width: 1023.8px) {
    margin: 30px 0 0 0;
  }

  @media screen and (min-width: 1299.8px) {
    padding: 34px 0 100px 0;
  }
`;


const StyledUl = styled.ul`
  list-style-type: none;
  padding: 0;

  @media screen and (min-width: 767.8px) {
    order: 2;
    display: flex;
    justify-content: flex-start;
    gap: 10px;
  }

  @media screen and (min-width: 1023.8px) {
    margin: 0;
  }
`;

const StyledDivProfession = styled.div`
  font: var(--font-text6-regular);

  @media screen and (min-width: 1023.8px) {
    font: var(--font-text5);
  }
`;

const StyledDivName = styled.div`
  font: var(--font-text7);

  @media screen and (min-width: 1023.8px) {
    font: var(--font-text6);
  }
`;


const StyledLink = styled.a`
  text-decoration: none;
  font: var(--font-text7);

  &:visited {
    color: var(--color-white);
  }

  &:hover {
    color: var(--color-purple);
  }
`;

const StyledNav = styled.nav`
  margin: 20px 0 0 0;
  width: 100%;

  @media screen and (min-width: 1299.8px) {
    margin: 0;
  }
`;

const StyledLi = styled.li`
  text-align: left;

  &:not(:last-child) {
    margin: 0 0 12px 0;
  }

  @media screen and (min-width: 767.8px) {
    padding: 0px;
    text-align: center;

    &:not(:last-child) {
      margin: 0;
    }

    @media screen and (min-width: 1023.8px) {
      &:not(:last-child) {
        margin: 0;
      }
    }
    @media screen and (min-width: 1299.8px) {
      text-align: left;
    }
  }
`;


export {
  StyledFooter,
  StyledLi,
  StyledUl,
  StyledDivProfession,
  StyledDivName,
  StyledLink,
  StyledNav,
};
