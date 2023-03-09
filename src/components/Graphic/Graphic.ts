import styled from "styled-components";

const StyledArticle = styled.article`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px 8px 9px 8px;

  &:not(list-child) {
    margin: 0 0 24px 0;
  }
`

const StyledP = styled.article`
  font: var(--font-little-text-regular);
  color: #29313C;
  text-align: justify;
  margin: 12px 0 0 0; 
`

export {StyledArticle, StyledP};
