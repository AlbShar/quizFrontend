import {
  FC,
  CSSProperties,
  useEffect,
  RefObject,
  forwardRef,
  Ref,
  useState,
} from 'react';
import { CSSTransition } from 'react-transition-group';
import "./style.css";

import {
  StyleArticleDropdown,
  StyledButton,
  StyledUl,
  StyledLi,
  StyledSpan,
  StyledImgLeft,
  StyledImgRight,
} from './Dropdown.Styled';

type TLanguages = {
  [key: string]: string;
};
type DropdownProps = {
  customStyle?: string;
  selected: string;
  data: TLanguages | string[];
  onClickElement?: (item: string) => void;
  ref: RefObject<HTMLDivElement>;
  srcImg?: string;
  srcArrowDown: string;
};

const Dropdown = forwardRef(
  (
    {
      data,
      selected,
      customStyle,
      onClickElement,
      srcImg = '',
      srcArrowDown,
    }: DropdownProps,
    ref: Ref<HTMLDivElement>,
  ) => {
    const [isActive, setActive] = useState<boolean>(false);

    const toggleList = () => {
      setActive((isActive) => !isActive);
    };

    const hideList = () => {
      setActive(false);
    };
    const transformData = (data: unknown) => {
      if (Array.isArray(data)) {
        return data.map((item: string, index: number) => {
          return (
            <StyledLi
              style={{ padding: '10px 0', width: 300 }}
              key={index + 1}
              tabIndex={0}
              onClick={() => {
                onClickElement && onClickElement(item);
                toggleList();
              }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'baseline',
                  gap: 2,
                  justifyContent: 'center',
                }}
              >
                <span style={{ fontSize: 16, fontWeight: 700 }}>
                  {item.toUpperCase()}
                </span>
              </div>
            </StyledLi>
          );
        });
      } else {
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
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'baseline',
                    gap: 2,
                    justifyContent: 'center',
                  }}
                >
                  <span style={{ fontSize: 16, fontWeight: 700 }}>
                    {shotLang.toUpperCase()}
                  </span>
                  <span style={{ fontSize: 12, fontWeight: 400 }}>
                    {fullLang}
                  </span>
                </div>
              </StyledLi>
            );
          },
        );
      }
    };

    const dropdownElements = transformData(data);

    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        const target = e.target as HTMLElement;

        if (!target.closest('#wrapper')) {
          hideList();
        }
      };

      document.addEventListener('mousedown', handleClickOutside);

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);

    return (
      <StyleArticleDropdown ref={ref} id='wrapper'>
        <StyledButton onClick={toggleList}>
          {srcImg ? <StyledImgLeft src={srcImg} alt='img' /> : null}
          <StyledSpan
            className='dropdown-btn-text'
            customStyle={customStyle || ''}
          >
            {selected.toUpperCase() || ''}
          </StyledSpan>

          <StyledImgRight src={srcArrowDown} alt='Кнопка вниз' />
        </StyledButton>
        <CSSTransition in={isActive} timeout={300} classNames='list'>
          {<>{isActive && <StyledUl>{dropdownElements}</StyledUl>}</>}
        </CSSTransition>
      </StyleArticleDropdown>
    );
  },
);

Dropdown.displayName = 'Dropdown';

export default Dropdown as FC<
  DropdownProps & { ref?: RefObject<HTMLDivElement> }
>;
