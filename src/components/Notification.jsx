import React, {useEffect} from "react";
import { StyleDivNotification, StyledDivWrapper, StyledH1, StyledSpan, StyledSpanClose } from "./styles/Notification.Styled";

const ShowNotification = () => {
  useEffect(() => {
    localStorage.setItem('penalty-points', '3')
  })
  return (
    <StyleDivNotification id="notification">
      <StyledDivWrapper>
        <StyledH1 className="notification__title">К сожалению, Ваше время вышло! 😔</StyledH1>
        <StyledSpanClose className="notification__close" onClick={() => {
            document.querySelector("#notification").style.display = 'none';
        }}>✖</StyledSpanClose>
        <StyledSpan className="notification__text">Продолжайте решать тест дальше. В связи с тем, что время закончилось из Вашего результата вычтется 3 балла.</StyledSpan>
      </StyledDivWrapper>
    </StyleDivNotification>
  );
};

export default ShowNotification;
