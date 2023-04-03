import {FC, useRef, RefObject} from "react";
import { StyleDivModal, StyledDivWrapper, StyledH1, StyledSpan, StyledSpanClose, StyledButtonModal } from "./Modal.Styled";

interface Mod {
  title: string;
  subTitle: string;
}
const Modal: FC<Mod> = ({title, subTitle}) => {

  const hideNotification = (modalRef: RefObject<HTMLDivElement>) => {
    if (modalRef.current) {
      modalRef.current.style.display = 'none';
    }
  };

  const modalRef = useRef<HTMLDivElement>(null);

 
  return (
    <StyleDivModal ref={modalRef} id="notification">
      <StyledDivWrapper>
        <StyledH1 className="notification__title">{title}</StyledH1>
        <StyledSpanClose className="notification__close" onClick={() => {
           hideNotification(modalRef);
        }}>✖</StyledSpanClose>
        <StyledSpan className="notification__text">{subTitle}</StyledSpan>
        <StyledButtonModal onClick={() => {
           hideNotification(modalRef);
        }}>Продолжить</StyledButtonModal>
      </StyledDivWrapper>
    </StyleDivModal>
  );
};

export default Modal;
