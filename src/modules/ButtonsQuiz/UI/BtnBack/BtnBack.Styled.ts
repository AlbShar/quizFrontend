import styled from 'styled-components';

const StyledButtonBack = styled.button`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 8px 13px;
  border: none;
  gap: 8px;
  cursor: pointer;
  border-radius: 7px;
  background-color: #585aff;
  width: 100%;
  max-width: 120px;
  max-height: 56px;

  &:disabled {
    background-color: #B7B7FF;
    cursor: not-allowed;
  }

  @media screen and (min-width: 768.8px) {
    padding: 16px 24px;
    max-width: 170px;
    max-height: 56px;
    gap: 23px;
  }
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



const StyledSpan = styled.span`
  color: #fff;
  font: var(--font-bold);
  text-transform: uppercase;
`;

export { StyledArticle, StyledButtonBack, StyledSpan };
