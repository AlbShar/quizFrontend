import styled from 'styled-components';

const StyledButton = styled.button`
  box-sizing: border-box;
  padding: 3px 10px;
  border: none;
  font: var(--font-button);
  text-transform: uppercase;
  cursor: pointer;
  color: white;
  text-decoration: none;
  border-radius: 7px;
  background-color: rgba(88, 90, 255, 0.49);
  max-width: 190px;
  width: 100%;
  max-height: 50px;

  &:disabled {
    filter: grayscale(0.7);
    cursor: not-allowed;
  }

  @media screen and (min-width: 767.8px) {
    padding: 16px 54px;
    max-width: 260px;
  }
`;

const StyledButtonQuiz = styled(StyledButton)`
  position: absolute;
  right: 0;
  top: 0;
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
  StyledButton,
  StyledArticle,
  StyledButtonBack,
  StyledImg,
  StyledSpan,
  StyledButtonQuiz,
};