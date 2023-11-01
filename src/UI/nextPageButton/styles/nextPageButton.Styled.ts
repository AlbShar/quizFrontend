import styled from 'styled-components';

type TButtonsProps = {
  pageName: 'results' | 'quiz' | 'home';
};

const StyledButton = styled.button<TButtonsProps>`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px 10px;
  border: none;
  font: var(--font-button);
  text-transform: uppercase;
  cursor: pointer;
  color: ${({ pageName }) =>
    pageName === 'home' ? 'var(--color-black)' : 'var(--color-white)'};
  text-decoration: none;
  border-radius: 3px;
  background-color: ${({ pageName }) =>
    pageName === 'home' ? 'var(--color-white)' : 'var(--color-purple)'};
  width: 100%;
  height: 54px;

  &:disabled {
    background-color: ${({ pageName }) =>
      pageName === 'home' ? 'transparent' : 'var(--color-purple)'};
    border: 2px solid var(--color-purple);
    cursor: not-allowed;
    color: var(--color-white);
    opacity: ${({ pageName }) => (pageName === 'home' ? '1' : '0.3')};
  }

  @media screen and (min-width: 767.8px) {
    padding: 16px 18px;
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
