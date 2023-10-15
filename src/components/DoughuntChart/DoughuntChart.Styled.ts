import styled from 'styled-components';

const StyledArticle = styled.article`
  box-sizing: border-box;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px 8px 30px 8px;
  border-radius: 7px;

  @media screen and (min-width: 767.8px) {
    flex-basis: 50%;
  }
`;

const StyledP = styled.article`
  font: var(--font-text6-regular);
  color: #29313c;
  text-align: justify;
  margin: 12px 0 0 0;

  @media screen and (min-width: 767.8px) {
    margin: 12px 0 42px 0;
  }

  @media screen and (min-width: 1023.8px) {
    margin: 12px 0 33px 0;
  }

  @media screen and (min-width: 1265.8px) {
    margin: 12px 0 15px 0;
  }
`;

const StyledDoughuntWrapper = styled.div`
  position: relative;
  width: 265px;
  height: 265px;
`;

const StyledSpan = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -25%);
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 39px;
  line-height: 60px;
  color: #6768d7;
`;

export { StyledArticle, StyledP, StyledSpan, StyledDoughuntWrapper };
