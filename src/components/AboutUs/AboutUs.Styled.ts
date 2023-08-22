import styled from 'styled-components';

const StyledP = styled.p`
  font: var(--font-text5);
  color: var(--color-black);
  text-align: left;
  margin-top: 0;

  @media screen and (min-width: 1023.8px) {
    font: var(--font-text4);
  }
`;

const StyledH3 = styled.h3`
  font: var(--font-text10);
  max-width: 403px;
  color: var(--color-black);
  text-align: center;

  @media screen and (min-width: 767.8px) {
    text-align: left;
    margin: 0;
  }

  @media screen and (min-width: 1023.8px) {
    font: var(--font-text2);
  }
`;

const StyledImg = styled.img`
  @media screen and (min-width: 767.8px) {
    position: absolute;
    z-index: 2;
    bottom: -60px;
  }

  @media screen and (min-width: 1299.8px) {
    width: 257px;
    height: 389px;
    bottom: -90px;
  }
`;
const StyledSection = styled.section`
  position: relative;
  // padding: 0 0 50px 0;

  @media screen and (min-width: 767.8px) {
    padding: 30px 0 35px 0;
  }

  @media screen and (min-width: 1299.8px) {
    padding: 90px 0 150px 0;
  }
`;

export { StyledP, StyledH3, StyledImg, StyledSection };
