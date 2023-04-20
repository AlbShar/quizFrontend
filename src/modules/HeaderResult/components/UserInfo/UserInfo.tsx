import { FC } from "react";

import { StyledLabel, StyledUserData, StyledArticleName, StyledArticleEmail } from "./UserInfo.Styled";
import { StyledSection } from "./UserInfo.Styled";

const UserInfo: FC = () => {
  
  return (
    <StyledSection>
      <StyledArticleName>
        <StyledLabel>Имя</StyledLabel>
        <StyledUserData>Антон</StyledUserData>
      </StyledArticleName>
      <StyledArticleEmail>
        <div>
          <StyledLabel as="span">Email</StyledLabel>
          <StyledUserData as="span">Anton@gmail.com</StyledUserData>
        </div>
      </StyledArticleEmail>
    </StyledSection>
  );
};

export default UserInfo;
