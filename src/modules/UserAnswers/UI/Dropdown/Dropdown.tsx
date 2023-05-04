import {
  FC,
  CSSProperties,
  useEffect,
  RefObject,
  forwardRef,
  Ref,
} from "react";


import {
  StyleArticleDropdown,
  StyledButton,
  StyledUl,
  StyledLi,
  StyledImg,
  StyledSpan,
} from "./Dropdown.Styled";



type DropdownProps = {
  style?: CSSProperties;
  selected: string;
  isActive: boolean;
  data: string[];
  showListThemes?: () => void;
  themeHasChoosen?: (item: string) => void;
  ref: RefObject<HTMLDivElement>;
  hideListFilters: () => void;
};

const Dropdown = forwardRef(
  (
    {
      hideListFilters,
      data,
      selected,
      isActive,
      style,
      themeHasChoosen,
      showListThemes,
    }: DropdownProps,
    ref: Ref<HTMLDivElement>,
  ) => {
    const elementLanguages = data.map((item: string, index: number) => {
      return (
        <StyledLi
          key={index + 1}
          tabIndex={0}
          onClick={() => themeHasChoosen && themeHasChoosen(item)}
        >
          {item}
        </StyledLi>
      );
    });

    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        const target = e.target as HTMLElement;

        if (!target.closest("#wrapper")) {
          hideListFilters();
        }
      };

      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);

    return (
      <StyleArticleDropdown ref={ref} style={style} id="wrapper">
          <StyledButton onClick={showListThemes}>
            <StyledSpan className="dropdown-btn-text">
              {selected || data[0]}
            </StyledSpan>
            <StyledImg src={require("../../../../assets/images/chevrondown.png")} alt="Кнопка вниз" />
          </StyledButton>
        {isActive && <StyledUl>{elementLanguages}</StyledUl>}
      </StyleArticleDropdown>
    );
  },
);

Dropdown.displayName = "Dropdown";

export default Dropdown as FC<
  DropdownProps & { ref?: RefObject<HTMLDivElement> }
>;
