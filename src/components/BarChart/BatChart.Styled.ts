import styled from 'styled-components';

const StyledArticle = styled.article`
  box-sizing: border-box;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 575px;
  width: 100%;
  height: 100%;
  padding: 16px 8px 9px 8px;
  border-radius: 7px;
  margin: 0 0 10px 0;

  @media screen and (min-width: 767.8px) {
    max-width: 50%;
    margin: 0;
  }
  
  @media screen and (min-width: 1023.8px) {
    padding: 25px 8px 15px 8px;
  }
`;

const StyledP = styled.article`
  font: var(--font-text6-regular);
  color: #29313c;
  text-align: justify;
  margin: 12px 0 0 0;
`;

const StyledBarChartWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 220px;
  max-width: 525px;
`;

export { StyledArticle, StyledP, StyledBarChartWrapper };
