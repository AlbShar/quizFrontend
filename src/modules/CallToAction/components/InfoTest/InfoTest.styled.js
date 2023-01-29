import styled from "styled-components";

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  box-sizing: border-box;
  list-style-type: none;
  margin: 26px 0 0 0;
  padding: 8px 12px;
  background-color: var(--color-call-action-info);

  @media screen and (min-width: 459.8px) {
    max-width: 685px;
    padding: 24px;
    flex-direction: row;

  }

`;

const StyledImg = styled.img`
  width: 18px;
  height: 18px;
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

  @media screen and (min-width: 459.8px) {
    font: var(--font-text-bold);

    &:not(:last-child) {
      margin: 0 30px 0 0;
    }

    &:not(:last-child):after {
      position: relative;
      content: "/";
      left: 12px;
    }

  }

`;

export { StyledUl, StyledImg, StyledLi };
