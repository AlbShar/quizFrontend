import styled from 'styled-components';

const StyledArticle = styled.article`
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  background-color: var(--color-dark);
  padding: 31px 20px 34px 25px;

   @media screen and (min-width: 1299.8px) {
    width: 200px;
    right: 0;
    top: 30px;
  }
}`;

export { StyledArticle };
