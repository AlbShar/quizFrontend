import styled from 'styled-components';

const StyledCallToAction = styled.section`
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



const StyledH1 = styled.h1`
  font: var(--font-text2);
  color: var(--color-white);
  padding: 0;
  margin: 0;
  text-align: center;
  padding: 30px 0 0 0;

  @media screen and (min-width: 767.8px) {
    text-align: left;
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

  @media screen and (min-width: 1023.8px) {
    font: var(--font-text4);
  }
`;

const StyledImg = styled.img`
    width: 100%;
    height: auto;
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
    gap: 45px;
    align-items: center;
  }
`;


export {
  StyledCallToAction,
  StyledH1,
  StyledH2,
  StyledDiv,
  StyledImg,
};
