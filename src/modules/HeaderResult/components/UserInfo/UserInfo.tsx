import { FC, useState, useEffect } from "react";

import { StyledLabel, StyledUserData, StyledArticleName, StyledArticleEmail } from "./UserInfo.Styled";
import { StyledSection } from "./UserInfo.Styled";

const UserInfo: FC = () => {

    const [viewportWidth, setViewportWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        setViewportWidth(window.innerWidth);
      };
  
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  
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
        {viewportWidth > 1023.8  ? <div>
          <StyledLabel as="span">Age</StyledLabel>
          <StyledUserData as="span">23</StyledUserData>
        </div> : false}
      </StyledArticleEmail>
    </StyledSection>
  );
};

export default UserInfo;
