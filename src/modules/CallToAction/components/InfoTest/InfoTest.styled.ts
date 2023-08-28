import styled from 'styled-components';

const StyledUl = styled.ul`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  box-sizing: border-box;
  list-style-type: none;
  margin: 26px 0 0 0;
  padding: 8px 12px;
  border-radius: 3px;
  background-color: var(--color-gray);
  min-height: 48px;

  @media screen and (min-width: 767.8px) {
    max-width: 512px;
    padding: 10px 15px;
    flex-direction: row;
    max-height: 58px;
    align-items: center;
  }

  @media screen and (min-width: 1299.8px) {
    padding: 10px 36px;
  }
`;

const StyledImg = styled.img`
  width: 24px;
  height: 24px;
  margin: 0 8px 0 0;
`;

const StyledLi = styled.li`
  color: white;
  font: var(--font-little-text-bold);
  display: flex;
  justify-content: flex-start;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 5px;
  }

  @media screen and (min-width: 767.8px) {
    font: var(--font-text-bold);

    &:not(:last-child) {
      margin: 0 0 0 0;
    }

    &:not(:last-child):after {
      color: var(--color-white);
      position: relative;
      content: '/';
      left: 15px;
    }
  }

  @media screen and (min-width: 1023.8px) {
    &:not(:last-child):after {
      left: 35px;
    }
  }

  @media screen and (min-width: 1299.8px) {
    &:not(:last-child):after {
      left: 20px;
    }
  }
`;

export { StyledUl, StyledImg, StyledLi };
