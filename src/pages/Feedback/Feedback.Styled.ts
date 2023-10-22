import styled from 'styled-components';

const StyledH1 = styled.h1`
  font: var(--font-title4);
  color: black;
  padding: 0;
  margin: 20px 0;

  @media screen and (min-width: 459.8px) {
    font: var(--font-title2);
  }
`

const StyledSection = styled.section`
  background-color: white;
  padding: 18px 8px 16px 8px;

  @media screen and (min-width: 459.8px) {
    padding: 40px;
  }
`;

const StyledP = styled.p`
  font: var(--font-little-text-regular);
  color: black;
  padding: 0;
  margin: 0 0 20px 0;
  text-align: left;

  @media screen and (min-width: 459.8px) {
    font: var(--font-text-regular);
    margin: 16px 0;
  }
`;

export { StyledH1, StyledSection, StyledP };
