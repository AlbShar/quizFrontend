import {  memo } from 'react';
import { CSSTransition } from 'react-transition-group';

import { useDisplayListDropdown } from 'modules/UserAnswers/hooks/useDisplayListDropdown';

import {
  StyleArticleDropdown,
  StyledButton,
  StyledUl,
  StyledLi,
  StyledImgRight,
  StyledSpan,
  StyledImgLeft,
} from './Dropdown.Styled';


type DropdownProps = {
  selected: string;
  updateThemes: string[];
  setTopic: (index: number, topic?: string) => void;
  srcArrowDown: string;
};

export const Dropdown = memo(
  ({ updateThemes, selected, setTopic, srcArrowDown }: DropdownProps) => {
    const { isActive, toggleList } = useDisplayListDropdown();

    const listThemes = updateThemes.map((item: string, index: number) => {
      return (
        <StyledLi
          key={index + 1}
          tabIndex={0}
          onClick={() => {
            setTopic(index);
            toggleList();
          }}
        >
          {item}
        </StyledLi>
      );
    });

    return (
      <StyleArticleDropdown>
        <StyledButton onClick={toggleList}>
          <StyledSpan className='dropdown-btn-text'>
            {selected && selected.toUpperCase()}
          </StyledSpan>

          <StyledImgRight src={srcArrowDown} alt='Кнопка вниз' />
        </StyledButton>
        <CSSTransition in={isActive} timeout={300} classNames='list'>
          {<>{isActive && <StyledUl>{listThemes}</StyledUl>}</>}
        </CSSTransition>
      </StyleArticleDropdown>
    );
  },
);
