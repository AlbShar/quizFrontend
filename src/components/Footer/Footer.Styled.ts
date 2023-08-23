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

const StyledFlexWrapper = styled.div`
  gap: 15px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 767.8px) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  }
`;

//#region StyledSections

const StyledSection = styled.section`
  @media screen and (min-width: 767.8px) margin-right: 10px;
`;

//#endregion

//#region StyledUl

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

//#endregion

//#region StyledLi

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

//#endregion

export { StyledFooter, StyledSection, StyledLi, StyledUl, StyledFlexWrapper };
