import { useState, useContext, useEffect, memo } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useSelector } from 'react-redux';

import { ContextLanguage } from 'components/Context';
import { setValueToLocalStorage } from 'helpers/setValueToLocalStorage';
import { getValueFromLocalStorage } from 'helpers/getValueFromLocalStorage';
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

import type { RootState } from 'app/store/index';

type DropdownProps = {
  selected: string;
  updateThemes: string[];
  setFilterByTheme: (item: string) => void;
  srcArrowDown: string;
};

export const Dropdown = memo(
  ({
    updateThemes,
    selected,
    setFilterByTheme,
    srcArrowDown,
  }: DropdownProps) => {
    const { isActive, setActive } = useDisplayListDropdown();
    const [lang]: [string, (lang: string) => void] =
      useContext(ContextLanguage);
    const themes = useSelector((state: RootState) => state.themes);
    // console.log(selected);

    useEffect(() => {
      const keyTheme = getValueFromLocalStorage('keyTheme') || 'defaultValue';
      setFilterByTheme(themes[lang][keyTheme]);
      console.log(keyTheme);
      console.log(themes[lang][keyTheme]);
    }, [lang]);

    const toggleList = () => {
      setActive((isActive) => !isActive);
    };

    const onClickButton = () => {
      toggleList();
    };
    const listThemes = updateThemes.map((item: string, index: number) => {
      return (
        <StyledLi
          key={index + 1}
          tabIndex={0}
          onClick={() => {
            const theme =
              index === 0
                ? themes[lang]['defaultValue']
                : themes[lang][`theme${index}`];
            setValueToLocalStorage('keyTheme', index === 0 ? 'defaultValue' : `theme${index}`);
            setFilterByTheme(theme);
            toggleList();
          }}
        >
          {item}
        </StyledLi>
      );
    });

    return (
      <StyleArticleDropdown>
        <StyledButton onClick={onClickButton}>
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
