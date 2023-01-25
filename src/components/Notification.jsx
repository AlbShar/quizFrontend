import React, {useEffect} from "react";
import { StyleDivNotification, StyledDivWrapper, StyledH1, StyledSpan, StyledSpanClose } from "./styles/Notification.Styled";
import {StyledButtonModal} from "./styles/Notification.Styled";

const ShowNotification = ({title, subTitle}) => {
  const hideNotification = (selector) => {
    document.querySelector(selector).style.display = 'none';
  };
  useEffect(() => {
    localStorage.setItem('penalty-points', '3')
  })
  return (
    <StyleDivNotification id="notification">
      <StyledDivWrapper>
        <StyledH1 className="notification__title">{title}</StyledH1>
        <StyledSpanClose className="notification__close" onClick={() => {
           hideNotification('#notification');
        }}>✖</StyledSpanClose>
        <StyledSpan className="notification__text">{subTitle}</StyledSpan>
        <StyledButtonModal onClick={() => {
           hideNotification('#notification');
        }}>Продолжить</StyledButtonModal>
      </StyledDivWrapper>
    </StyleDivNotification>
  );
};

export default ShowNotification;
