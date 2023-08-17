import styled from 'styled-components';

const StyledH3 = styled.h3`
  color: var(--color-black);
  font: var(--font-text10);
  text-align: center;
  margin: 60px 0 30px 0;

  @media screen and (min-width: 767.8px) {
    text-align: left;
  }
`;

const StyledImg = styled.img`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 61px;
  height: 152px;

  @media screen and (min-width: 767.8px) {
    top: 40%;
  }

  @media screen and (min-width: 1299.8px) {
    width: 122px;
    height: 305px;
    top: 20%;
  }
`;

const StyledSection = styled.section`
//   @media screen and (min-width: 1023.8px) {
//     position: relative;
//   }
`;

export { StyledH3, StyledSection, StyledImg };