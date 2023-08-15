import styled from 'styled-components';

type TProps = {
  isClickButton: boolean;
};

const StyleArticleDropdown = styled.article`
  cursor: pointer;
  position: relative;
  width: 100%;
`;

const StyledButton = styled.button<TProps>`
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 3px;
  margin: 0 0 5px 0;
  cursor: pointer;
  border: none;
  border-radius: 7px;
  padding: 8px 5px;
  text-align: center;
  height: 40px;
  width: 100%;
  background-color: ${({ isClickButton }) =>
    isClickButton ? 'var(--color-purple)' : 'var(--color-white)'};

  @media screen and (min-width: 767.8px) {
    min-height: 56px;
  }
`;

const StyledSpan = styled.span<TProps>`
  display: inline-block;
  font: var(--font-text7);
  color: ${({ isClickButton }) =>
    isClickButton ? 'var(--color-white)' : 'var(--color-black)'};

  @media screen and (min-width: 767.8px) {
    font: var(--font-text6);
  }
`;

const StyledSpanList = styled.span`
  color: #000;
  font-family: Inter;
  font-size: 14px;
  font-weight: 700;

  @media screen and (min-width: 767.8px) {
    font-size: 16px;
  }
`;


const StyledUl = styled.ul`
  box-sizing: border-box;
  list-style-type: none;
  margin: 0;
  padding: 0;
  border-radius: 7px;
  box-shadow: 0px 4px 4px 0px #0000003d;
  width: auto;
  position: absolute;
  z-index: 2;
  background-color: var(--color-white);
`;

const StyledLi = styled.li`
  color: var(--color-black);
  background-color: transparent;
  border-radius: 7px;

  font-family: Inter;
  padding: 5px 10px;
  width: auto;

  &:hover {
    color: var(--color-white);
    background-color: var(--color-purple);
  }
`;

const StyledImg = styled.img<TProps>`
  filter: ${({ isClickButton }) => (isClickButton ? 'invert(1)' : 'invert(0)')};
`;


export {
  StyleArticleDropdown,
  StyledButton,
  StyledUl,
  StyledLi,
  StyledSpan,
  StyledSpanList,
  StyledImg,
};
