import {
  FC,
  CSSProperties,
  useEffect,
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
  toggleListThemes?: () => void;
  themeHasChoosen?: (item: string) => void;
  hideListFilters: () => void;
  idWrapper: string
};

const Dropdown =
  (
    {
      hideListFilters,
      data,
      selected,
      isActive,
      style,
      themeHasChoosen,
      toggleListThemes,
      idWrapper,
    }: DropdownProps,
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
        if (!target.closest(idWrapper) && target.tagName !== "LI") {
          hideListFilters();
        }
      };

      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

    return (
      <StyleArticleDropdown style={style} id={idWrapper}>
          <StyledButton onClick={toggleListThemes}>
            <StyledSpan className="dropdown-btn-text">
              {selected || data[0]}
            </StyledSpan>
            <StyledImg src={require("../../../../assets/images/chevrondown.png")} alt="Кнопка вниз" />
          </StyledButton>
        {isActive && <StyledUl>{elementLanguages}</StyledUl>}
      </StyleArticleDropdown>
    );
  };

Dropdown.displayName = "Dropdown";

export default Dropdown;
