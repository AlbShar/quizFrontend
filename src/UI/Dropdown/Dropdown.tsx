import {
  FC,
  CSSProperties,
  useEffect,
  RefObject,
  forwardRef,
  Ref,
  useState
} from 'react';

import {
  StyleArticleDropdown,
  StyledButton,
  StyledUl,
  StyledLi,
  StyledImg,
  StyledSpan,
} from './Dropdown.Styled';

require('../../assets/images/chevrondown.png');

type DropdownProps = {
  style?: CSSProperties;
  selected: string;
  data: string[];
  onClickElement?: (item: string) => void;
  ref: RefObject<HTMLDivElement>;
};

const Dropdown = forwardRef(
  (
    {
      data,
      selected,
      style,
      onClickElement,
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


    const dropdownElements = data.map((item: string, index: number) => {
      return (
        <StyledLi
          key={index + 1}
          tabIndex={0}
          onClick={() => {
            onClickElement && onClickElement(item);
            toggleList();
          }}
        >
          {item}
        </StyledLi>
      );
    });

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
          <StyledSpan className='dropdown-btn-text'>
            {selected || data[0]}
          </StyledSpan>
          <StyledImg
            src={require('../../assets/images/chevrondown.png')}
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
