import styled from "styled-components";

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
  position: relative;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  gap: 40px;
  margin-top: 32px;
  max-width: 540px;
  padding: 5px;

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

export {
  StyledArticle,
  StyledButtonBack,
  StyledImg,
  StyledSpan,
};
