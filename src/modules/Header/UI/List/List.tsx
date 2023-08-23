import Feedback from "../../../../UI/Feedback/Feedback";

import { StyledLi, StyledUl } from "./List.Styled";

type ListProps = {
  onClickCloseBtn?: () => void;
};

const List = ({onClickCloseBtn}: ListProps) => {
  return (
    <StyledUl>
      <StyledLi>
        <Feedback onClickCloseBtn={onClickCloseBtn} />
      </StyledLi>
      <StyledLi>Команда</StyledLi>
      <StyledLi>Правила</StyledLi>
    </StyledUl>
  );
};

export default List;