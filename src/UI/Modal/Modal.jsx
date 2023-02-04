import React, {useEffect} from "react";
import { StyleDivModal, StyledDivWrapper, StyledH1, StyledSpan, StyledSpanClose, StyledButtonModal } from "./Modal.Styled";

const Modal = ({title, subTitle}) => {
  const hideNotification = (selector) => {
    document.querySelector(selector).style.display = 'none';
  };

  // удалить этот хук и переместить логику в компонент Timer!
  useEffect(() => {
    localStorage.setItem('penalty-points', '3')
  })
  return (
    <StyleDivModal id="notification">
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
    </StyleDivModal>
  );
};

export default Modal;
