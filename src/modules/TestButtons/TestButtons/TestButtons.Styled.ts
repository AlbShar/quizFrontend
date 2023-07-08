import styled from 'styled-components';

const StyledArticle = styled.article`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  margin-top: 25px;
  max-width: 100%;
  padding: 5px;

  @media screen and (min-width: 767.8px) {
    margin-top: 50px;
  }
`;

export { StyledArticle };
