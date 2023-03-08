import styled from "styled-components";



const StyledArticle = styled.section`
  padding: 0 0 12px 0;
  border-width: 0 0 1px 0;
  border-color: rgba(255, 255, 255, 0.1);
  border-style: solid; 
`;

const StyledLabel = styled.h3`
  color: #dfe4e9;
  font: var(--font-little-text-regular);
  margin: 0 8px 0 0;
  padding: 0;
`;

const StyledUserData = styled.h3`
  color: #ffffff;
  font: var(--font-little-text-bold);
  margin: 0;
  padding: 0;
`;

export { StyledLabel, StyledUserData, StyledArticle };
