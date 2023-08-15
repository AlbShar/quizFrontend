import { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './style.css';

import {
  StyledButton,
  StyledUl,
  StyledLi,
  StyledSpan,
  StyledSpanList,
  StyledSpanShortLang,
  StyledSpanFullLang,
  StyledImg,
  StyledDivWrapperLanguages,
} from './Dropdown.Styled';

type TLanguages = {
  [key: string]: string;
};
type DropdownProps = {
  customStyle?: string;
  selected: string;
  data: TLanguages | string[];
  onClickElement?: (item: string) => void;
  srcImg?: string;
  srcArrowDown: string;
};

const Dropdown = ({
  data,
  selected,
  customStyle,
  onClickElement,
  srcImg = '',
  srcArrowDown,
}: DropdownProps) => {
  const [isClickButton, setClickButton] = useState<boolean>(false);

  const toggleList = () => {
    setClickButton((isClickButton) => !isClickButton);
  };

  const onClickButton = () => {
    toggleList();
  };

  const transformData = (data: unknown) => {
    return Object.entries(data as TLanguages).map(
      (item: string[], index: number) => {
        const shotLang = item[1];
        const fullLang = item[0];
        return (
          <StyledLi
            key={index + 1}
            tabIndex={0}
            onClick={() => {
              onClickElement && onClickElement(shotLang);
              toggleList();
            }}
          >
            <StyledDivWrapperLanguages
            >
              <StyledSpanShortLang
              >
                {shotLang.toUpperCase()}
              </StyledSpanShortLang>
              <StyledSpanFullLang
              >
                {fullLang}
              </StyledSpanFullLang>
            </StyledDivWrapperLanguages>
          </StyledLi>
        );
      },
    );
  };

  const dropdownElements = transformData(data);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (!target.closest('ul') && !target.closest('button')) {
        setClickButton(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div style={{position: 'relative'}}>
      <StyledButton onClick={onClickButton} isClickButton={isClickButton}>
        <StyledImg src={srcImg} alt='img' isClickButton={isClickButton} />

        <StyledSpan className='dropdown-btn-text' isClickButton={isClickButton}>
          {selected.toUpperCase() || ''}
        </StyledSpan>

        <StyledImg
          src={srcArrowDown}
          alt='Кнопка вниз'
          isClickButton={isClickButton}
        />
      </StyledButton>
      <CSSTransition in={isClickButton} timeout={300} classNames='list'>
        {<>{isClickButton && <StyledUl>{dropdownElements}</StyledUl>}</>}
      </CSSTransition>
    </div>
  );
};

export default Dropdown;
