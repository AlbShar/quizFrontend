import styled from 'styled-components';

type StyledSpanResultProps = {
  isRight: boolean;
}

const StyledLi = styled.li`
  box-sizing: border-box;
  list-style-type: none;
  font: var(--font-little-text-regular);

  &:not(:last-child) {
    margin-bottom: 10px;
  }
  @media screen and (min-width: 767.8px) {
    font: var(--font-text-regular);

    &:not(:last-child) {
      margin-bottom: 25px;
    }
  }
`;
const StyledListAnswers = styled.li`
  box-sizing: border-box;
  word-wrap: break-word;
  list-style-type: none;
  font: var(--font-little-text-regular);
  padding: 0 10px;
  border-radius: 3px;
  background-color: var(--color-light-gray);

  &:not(:last-child) {
    margin-bottom: 10px;
  }
  @media screen and (min-width: 767.8px) {
    font: var(--font-text-regular);

    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
`;

const StyledUl = styled.ul`
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 8px 0 17px 0;
  position: relative;
`;

const StyledSum = styled.summary`
  box-sizing: border-box;
  width: 100%;
  background-color: transparent;
  font: var(--font-little-text-regular);
  color: var(--color-black);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  margin: 0 0 10px 0;

  @media screen and (min-width: 459.8px) {
    font: var(--font-title4);
    justify-content: flex-start;
    padding: 66px 0 0 0 ;
  }
`;

const StyledSpan = styled.span`
  font: var(--font-little-text-bold);

  @media screen and (min-width: 767.8px) {
    font: var(--font-text-bold);
  }
`;

const StyledSection = styled.section`
  margin: 24px 0 18px 0;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  gap: 15px;

  @media screen and (min-width: 767.8px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const StyledSpanResult = styled.span<StyledSpanResultProps>`
  position: absolute;
  color: ${({ isRight }) => (isRight ? 'green' : 'red')};
  top: 5px;
  right: 0;

  font: var(--font-little-text-bold);

  @media screen and (min-width: 767.8px) {
    font: var(--font-text-bold);
  }
`;



export {
  StyledLi,
  StyledUl,
  StyledSpan,
  StyledListAnswers,
  StyledSpanResult,
  StyledSum,
  StyledSection,
};
