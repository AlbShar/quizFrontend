import styled from 'styled-components';

const StyledLi = styled.li`
  box-sizing: border-box;
  list-style-type: none;
  font: var(--font-text5);

  &:not(:last-child) {
    margin-bottom: 10px;
  }
  @media screen and (min-width: 767.8px) {
    font: var(--font-text3);
    font-weight: 400;

    &:not(:last-child) {
      margin-bottom: 25px;
    }
  }
`;
const StyledListAnswers = styled.li`
  box-sizing: border-box;
  word-wrap: break-word;
  list-style-type: none;
  font: var(--font-text5);
  padding: 0 10px;
  border-radius: 3px;
  background-color: var(--color-light-gray);

  &:not(:last-child) {
    margin-bottom: 10px;
  }
  @media screen and (min-width: 767.8px) {
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
  cursor: pointer;
  width: 100%;
  background-color: transparent;
  font: var(--font-text11);
  color: var(--color-black);
  text-align: left;
  padding: 48px 0;

  @media screen and (min-width: 767.8px) {
    justify-content: flex-start;
    padding: 30px 0;
  }
`;


const StyledSpan = styled.span`
  font: var(--font-text5-bold);

  @media screen and (min-width: 767.8px) {
    font: var(--font-text3);
  }
`;

const StyledSection = styled.section`
  margin: 19px 0;
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

const StyledP = styled.p`
  font: var(--font-text5-bold);
  color: red;

  @media screen and (min-width: 767.8px) {
    font: var(--font-text3);
  }
`;


export {
  StyledLi,
  StyledUl,
  StyledSpan,
  StyledListAnswers,
  StyledSum,
  StyledSection,
  StyledP,
};
