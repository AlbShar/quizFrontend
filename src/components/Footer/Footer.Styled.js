import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: var(--color-footer);
  padding: 16px 16px 48px 16px;

  @media screen and (min-width: 767.8px) {
    margin: 10px 0 0 0;
  }

  @media screen and (min-width: 1023.8px) {
    padding: 16px 16px 32px 16px;
    margin: 30px 0 0 0;
  }
`;

const StyledA = styled.a`
    filter: invert(0.5);
    width: 24px;
    height: 24px;
    
    &:not(:last-child) {
        margin-right: 10px;
    }
}
`;

//#region StyledImgs

const StyledImgPayment = styled.img`
  @media screen and (min-width: 767.8px) {
    margin: 0 10px 0 0;
  }
  @media screen and (min-width: 1023.8px) {
    &:not(:last-child) {
      margin: 0 10px 0 0;
    }
  }
`;

const StyledImgNetworks = styled.img`
  @media screen and (min-width: 767.8px) {
    &:not(:last-child) {
      margin: 0 10px 0 0;
    }

    @media screen and (min-width: 1023.8px) {
      width: 24px;
      height: 24px;
    }
  }
`;

//#endregion

//#region StyledSections

const StyledSection = styled.section`
  @media screen and (min-width: 767.8px) margin-right: 10px;
`;

const StyledSectionNetworks = styled.section`
  display: inline-block;
  position: absolute;
  right: 10px;
  top: 10px;

  @media screen and (min-width: 767.8px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    margin: 0 10px 20px 0;
    order: 3;
    height: 100px;
  }
  @media screen and (min-width: 1023.8px) {
    padding: 0 0 15px 0;
    margin: 0 15px 0 0;
  }
`;

const StyledSectionPayment = styled.section`
  margin: 11px 0 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 767.8px) {
    display: flex;
    flex: 0 0 108px;
    overflow: hidden;
    order: 4;
    margin: 0;
  }
  @media screen and (min-width: 1023.8px) {
    margin: 0;
    flex-direction: row;
  }
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
  }

  @media screen and (min-width: 1023.8px) {
    margin: 0;
  }

`;

const StyledUlNetworks = styled.ul`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

//#endregion

//#region StyledLi

const StyledLiNetworks = styled.li`
  &:not(:last-child) {
    margin-right: 10px;
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

    &:not(:last-child) {
      margin: 0 10px 0 0;
    }

    @media screen and (min-width: 1023.8px) {
      padding: 10px;

      &:not(:last-child) {
        margin: 0;
      }
    }
  }
`;

//#endregion

export {
  StyledFooter,
  StyledImgNetworks,
  StyledImgPayment,
  StyledSectionNetworks,
  StyledSectionPayment,
  StyledUlNetworks,
  StyledLiNetworks,
  StyledSection,
  StyledLi,
  StyledUl,
  StyledA
};
