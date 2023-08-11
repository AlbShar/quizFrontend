import { Link } from "react-router-dom";

import { StyledLi, StyledUl } from "./List.Styled";
import "./link.css";

type ListProps = {
  onClickCloseBtn?: () => void;
};

const List = ({onClickCloseBtn}: ListProps) => {
  return (
    <StyledUl>
      <StyledLi>
        <Link to='/feedback' className='link' onClick={onClickCloseBtn}>
          Обратная связь
        </Link>
      </StyledLi>
      <StyledLi>Команда</StyledLi>
      <StyledLi>Правила</StyledLi>
    </StyledUl>
  );
};

export default List;