import styled from "styled-components";
import { StyledSect } from "../../styles/Common.Styled";

const StyledSection = styled(StyledSect)`
  width: 100%;
  max-width: 288px;
  height: auto;

  @media screen and (min-width: 767.8px) {
    max-width: 235px;
  }

  @media screen and (min-width: 1023.8px) {
    max-width: 383px;
  }
`;

const StyledArticleName = styled.article`
  padding: 0 0 12px 0;
  border-width: 0 0 1px 0;
  border-color: rgba(255, 255, 255, 0.1);
  border-style: solid;
`;

const StyledArticleEmail = styled.article`
  padding: 9px 0 0 0;

  @media screen and (min-width: 1023.8px) {
   display: flex;
   justify-content: space-between;
   align-items: center;
  }
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

export {
  StyledLabel,
  StyledUserData,
  StyledArticleName,
  StyledSection,
  StyledArticleEmail,
};
