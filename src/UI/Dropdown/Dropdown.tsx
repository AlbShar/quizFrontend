import {
  FC,
  CSSProperties,
  useEffect,
  RefObject,
  forwardRef,
  Ref,
  useState,
} from 'react';

import {
  StyleArticleDropdown,
  StyledButton,
  StyledUl,
  StyledLi,
  StyledSpan,
} from './Dropdown.Styled';


import globe from '../../assets/images/globe.svg';
import chevrondown from '../../assets/images/chevrondown.svg';

type Languages = {
  [key: string]: string;
};
type DropdownProps = {
  style?: CSSProperties;
  selected: string;
  data: Languages | string[];
  onClickElement?: (item: string) => void;
  ref: RefObject<HTMLDivElement>;
};

const Dropdown = forwardRef(
  (
    { data, selected, style, onClickElement }: DropdownProps,
    ref: Ref<HTMLDivElement>,
  ) => {
    const [isActive, setActive] = useState<boolean>(false);

    const toggleList = () => {
      setActive((isActive) => !isActive);
    };

    const hideList = () => {
      setActive(false);
    };

    const dropdownElements = Object.entries(data).map(
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
            <div style={{ display: 'inline-flex', alignItems: "baseline", gap: 2, justifyContent: "center" }}>
              <span style={{ fontSize: 16, fontWeight: 700 }}>
                {shotLang.toUpperCase()}
              </span>
              <span style={{ fontSize: 12, fontWeight: 400 }}>{fullLang}</span>
            </div>
          </StyledLi>
        );
      },
    );

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
      <StyleArticleDropdown ref={ref} style={style} id='wrapper'>
        <StyledButton onClick={toggleList}>
          <img style={{ margin: '0 7px 0 0' }} src={globe} alt='global' />
          <StyledSpan className='dropdown-btn-text'>
          {selected.toUpperCase() || "RU"}
          </StyledSpan>
          <img
            style={{ margin: '0 0 0 7px' }}
            src={chevrondown}
            alt='Кнопка вниз'
          />
        </StyledButton>
        {isActive && <StyledUl>{dropdownElements}</StyledUl>}
      </StyleArticleDropdown>
    );
  },
);

Dropdown.displayName = 'Dropdown';

export default Dropdown as FC<
  DropdownProps & { ref?: RefObject<HTMLDivElement> }
>;
