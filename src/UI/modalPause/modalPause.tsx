import {
  StyleDivModal,
  StyledDivWrapper,
  StyledH1,
  StyledSpan,
  StyledSpanClose,
  StyledButtonModal,
} from './modalPause.Styled';

type ModalProps = {
  title: string;
  subTitle: string;
  onClickHandler?: () => void;
};

export const ModalPause = ({
  title,
  subTitle,
  onClickHandler,
}: ModalProps): JSX.Element => {
  return (
    <StyleDivModal>
      <StyledDivWrapper>
        <StyledH1 className='notification__title'>{title}</StyledH1>
        <StyledSpanClose
          className='notification__close'
          onClick={onClickHandler}
        >
          ✖
        </StyledSpanClose>
        <StyledSpan className='notification__text'>{subTitle}</StyledSpan>
        <StyledButtonModal onClick={onClickHandler} data-testid='btn-continue'>
          Продолжить
        </StyledButtonModal>
      </StyledDivWrapper>
    </StyleDivModal>
  );
};
