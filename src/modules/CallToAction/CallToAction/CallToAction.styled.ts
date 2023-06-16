import styled from 'styled-components';

const StyledCallToAction = styled.section`
  max-width: 100%;
  background-color: var(--color-call-action);
  padding: 16px;
  margin: 0 0 13px 0;

  @media screen and (min-width: 459.8px) {
    margin: 0 0 32px 0;
  }

  @media screen and (min-width: 767.8px) {
    padding: 16px 16px 16px 40px;
  }
`;

const StyledH1 = styled.h1`
    font: var(--font-title4);
    color: white;
    padding: 0;
    margin: 0;

    @media screen and (min-width: 459.8px) {
        font: var(--font-title2);
`;

const StyledP = styled.p`
  font: var(--font-little-text-regular);
  color: white;

  @media screen and (min-width: 459.8px) {
    font: var(--font-text-regular);
  }
`;

export { StyledCallToAction, StyledH1, StyledP };
