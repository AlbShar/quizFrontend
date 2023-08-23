import styled from 'styled-components';

const StyledFooter = styled.footer`
  box-sizing: border-box;
  background-color: var(--color-dark);
  padding: 16px;
  margin: 10px 0 0 0;

  @media screen and (min-width: 1023.8px) {
    margin: 30px 0 0 0;
  }
`;

const StyledSection = styled.section`
  @media screen and (min-width: 767.8px) margin-right: 10px;
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

const StyledFlexWrapper = styled.div`
  @media screen and (min-width: 767.8px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 30px;
  }

  @media screen and (min-width: 1023.8px) {
    gap: 50px;
  }
`;

const StyledLink = styled.a`
  color: var(--color-white);
  text-decoration: none;

  &:hover {
    color: var(--color-purple);
  }

  &:visited {
    color: var(--color-white);
  }
`;


const StyledLi = styled.li`
  text-align: left;

  &:not(:last-child) {
    margin: 0 0 12px 0;
  }

  @media screen and (min-width: 767.8px) {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0px;

    &:not(:last-child) {
      margin: 0;
    }

    @media screen and (min-width: 1023.8px) {
      &:not(:last-child) {
        margin: 0;
      }
    }
  }
`;


export {
  StyledFooter,
  StyledSection,
  StyledLi,
  StyledUl,
  StyledDivProfession,
  StyledDivName,
  StyledLink,
  StyledFlexWrapper,
};
