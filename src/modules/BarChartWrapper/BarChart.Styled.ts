import styled from "styled-components";

const StyledArticle = styled.article`
  box-sizing: border-box;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 16px 8px 9px 8px;

  &:not(list-child) {
    margin: 0 0 24px 0;
  }
`;

const StyledP = styled.article`
  font: var(--font-little-text-regular);
  color: #29313c;
  text-align: justify;
  margin: 12px 0 0 0;
`;

const StyledSpan = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -20%);
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  line-height: 60px;
  color: #6768D7;
`;

export { StyledArticle, StyledP, StyledSpan };
