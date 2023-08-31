import styled from 'styled-components';

const StyledCallToAction = styled.article`
  max-width: 100%;
  background-color: transparent;
  padding: 0;
  margin: 0 0 13px 0;
  border-radius: 7px;
  poisition: relative;

  @media screen and (min-width: 459.8px) {
    margin: 0 0 32px 0;
  }

`;

const StyledSection = styled.section`
  background-color: var(--color-dark);
`;



const StyledH1 = styled.h1`
  font: var(--font-text2);
  color: var(--color-white);
  padding: 0;
  margin: 0;
  text-align: left;
  padding: 81px 0 0 0;

  @media screen and (min-width: 767.8px) {
    padding: 87px 0 0 0;
  }

  @media screen and (min-width: 1023.8px) {
    font: var(--font-text1);
    line-height: 40px;
  }
`;

const StyledH2 = styled.h2`
  font: var(--font-text5);
  color: white;
  text-align: left;
  margin: 24px 0 20px 0;

  @media screen and (min-width: 767.8px) {
    margin: 40px 0 54px 0;
  }

  @media screen and (min-width: 1023.8px) {
    font: var(--font-text4);
  }
`;

const StyledImg = styled.img`
  width: 100%;
  height: auto;
  transform: translateY(4px);
  margin: 36px 0 0 0;

  @media screen and (min-width: 767.8px) {
    width: 578px;
  }

  @media screen and (min-width: 1023.8px) {
    width: 100%;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  width: auto;
  gap: 20px;
  align-items: flex-start;
  flex-direction: column;

  @media screen and (min-width: 767.8px) {
    flex-direction: row;
    justify-content: flex-start;
    gap: 35px;
    align-items: center;
  }

  
`;


export {
  StyledCallToAction,
  StyledH1,
  StyledH2,
  StyledDiv,
  StyledImg,
  StyledSection,
};
