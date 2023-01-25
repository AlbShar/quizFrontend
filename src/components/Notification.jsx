import React, {useEffect} from "react";
import { StyleDivNotification, StyledDivWrapper, StyledH1, StyledSpan, StyledSpanClose } from "./styles/Notification.Styled";

const ShowNotification = ({title, subTitle}) => {
  useEffect(() => {
    localStorage.setItem('penalty-points', '3')
  })
  return (
    <StyleDivNotification id="notification">
      <StyledDivWrapper>
        <StyledH1 className="notification__title">{title}</StyledH1>
        <StyledSpanClose className="notification__close" onClick={() => {
            document.querySelector("#notification").style.display = 'none';
        }}>✖</StyledSpanClose>
        <StyledSpan className="notification__text">{subTitle}</StyledSpan>
      </StyledDivWrapper>
    </StyleDivNotification>
  );
};

export default ShowNotification;
