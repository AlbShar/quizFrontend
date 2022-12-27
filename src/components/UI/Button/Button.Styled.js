import styled from "styled-components";

const StyledButton = styled.button`
  padding: 8px 33px;
  background-color: var(--color-button);
  border: none;
  font: var(--font-button);
  text-transform: uppercase;
  cursor: pointer;
  color: white;
  text-decoration: none;

  @media screen and (min-width: 767.8px) {
    padding: 12px 80px;
  }
`;

const StyledButtonBack = styled.button`
  display: flex;
  align-items: center;
  padding: 0 5px;
  border: none;
  background-color: transparent;
  gap: 8px;
  cursor: pointer;
`;

const StyledArticle = styled.article`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  gap: 40px;
  margin-top: 32px;
  max-width: 540px;

  @media screen and (min-width: 768.8px) {
    max-width: 100%;
  }
`;

const StyledImg = styled.img`
  width: 24px;
  height: 24px;
`;

const StyledSpan = styled.span`
  font: var(--font-button);
  color: var(--color-back-btn);
  text-transform: uppercase;
`;

export { StyledButton, StyledArticle, StyledButtonBack, StyledImg, StyledSpan };
