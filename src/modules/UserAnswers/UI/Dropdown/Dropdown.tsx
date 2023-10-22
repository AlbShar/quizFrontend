import { memo } from 'react';
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

type TypeOfFilters = 'topics' | 'correctness';

type DropdownProps<T extends TypeOfFilters> = {
  typeFilter: T;
  selectedFilter: string;
  nameListItems: string[];
  srcArrowDown: string;
  setFilter: T extends 'topics'
    ? (index: number) => void
    : (filter: string) => void;
};

export const Dropdown = memo(
  <T extends TypeOfFilters>({
    nameListItems,
    typeFilter,
    selectedFilter,
    setFilter,
    srcArrowDown,
  }: DropdownProps<T>) => {
    const { isActive, toggleList } = useDisplayListDropdown();

    const listItems = nameListItems.map((item: string, index: number) => {
      return (
        <StyledLi
          key={index + 1}
          tabIndex={0}
          onClick={() => {
            if (typeFilter === 'topics') {
              (setFilter as (index: number) => void)(index);
            } else if (typeFilter === 'correctness') {
              (setFilter as (filter: string) => void)(item);
            }
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
            {selectedFilter && selectedFilter.toUpperCase()}
          </StyledSpan>

          <StyledImgRight src={srcArrowDown} alt='Кнопка вниз' />
        </StyledButton>
        <CSSTransition in={isActive} timeout={300} classNames='list'>
          {<>{isActive && <StyledUl>{listItems}</StyledUl>}</>}
        </CSSTransition>
      </StyleArticleDropdown>
    );
  },
);
