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

const StyledH2 = styled.h2`
  font: var(--font-h2-little);
  color: white;

  @media screen and (min-width: 767.8px) {
    font: var(--font-h2-large);
  }
`;

const StyledDiv = styled.div`
  display: flex;
  width: auto;
  gap: 10px;
  align-items: flex-start;
  flex-direction: column;

  @media screen and (min-width: 767.8px) {
    flex-direction: row;
    justify-content: flex-start;
    gap: 45px;
    align-items: center;
  }
`;

const StyledDivWrapper = styled.div`
  width: 250px;
  height: 45px;

  @media screen and (min-width: 767.8px) {
    height: 56px;
  }
`;

export { StyledCallToAction, StyledH1, StyledH2, StyledDiv, StyledDivWrapper };
