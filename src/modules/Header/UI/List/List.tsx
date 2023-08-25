import Feedback from '../../../../UI/Feedback/Feedback';

import { StyledLi, StyledUl, StyledLink } from './List.Styled';

type ListProps = {
  onClickCloseBtn?: () => void;
};

const List = ({ onClickCloseBtn }: ListProps) => {
  return (
    <StyledUl>
      <StyledLi>
        <Feedback onClickCloseBtn={onClickCloseBtn} />
      </StyledLi>
      <StyledLi>
        <StyledLink href='#team'> Команда</StyledLink>
      </StyledLi>
      <StyledLi>
        <StyledLink href='#rules'>Правила</StyledLink>
      </StyledLi>
    </StyledUl>
  );
};

export default List;
