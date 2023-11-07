import { memo } from 'react';
import { CSSTransition } from 'react-transition-group';

import { useDisplayListDropdown } from './hooks/useDisplayListDropdown';
import {
  StyleArticleDropdown,
  StyledButton,
  StyledUl,
  StyledLi,
  StyledImgRight,
  StyledSpan,
} from './dropdown.Styled';

type TypeOfFilter = 'topics' | 'correctness' | 'profession';

type DropdownProps<T extends TypeOfFilter> = {
  typeFilter: T;
  selectedFilter: string;
  shortNameListItems?: string[];
  fullNameListItems: string[];
  srcArrowDown: string;
  setFilter: T extends 'topics'
    ? (index: number) => void
    : (filter: string) => void;
};

export const Dropdown = memo(
  <T extends TypeOfFilter>({
    fullNameListItems,
    shortNameListItems,
    typeFilter,
    selectedFilter,
    setFilter,
    srcArrowDown,
  }: DropdownProps<T>) => {
    const { isActive, toggleList } = useDisplayListDropdown();
    const items = shortNameListItems ? shortNameListItems : fullNameListItems;

    const listItems = items.map((item: string, index: number) => {
      return (
        <StyledLi
          isShortNameListItems={!!shortNameListItems}
          key={index + 1}
          tabIndex={0}
          data-title={shortNameListItems && fullNameListItems[index]}
          onClick={() => {
            if (typeFilter === 'topics') {
              (setFilter as (index: number) => void)(index);
            } else {
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
        <StyledButton onClick={toggleList} typeFilter={typeFilter}>
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
