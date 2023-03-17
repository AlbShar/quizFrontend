import {
  FC,
  CSSProperties,
  useEffect,
  RefObject,
  forwardRef,
  Ref,
} from "react";
import i18next from "i18next";
import {
  StyleDivDropdown,
  StyledButton,
  StyledUl,
  StyledLi,
  StyledImg,
  StyledSpan,
} from "./Dropdown.Styled";

const chevrondown = require("../../assets/images/chevrondown.png");

type DropdownProps = {
  style?: CSSProperties;
  selected: string;
  isActive: boolean;
  data: string[];
  onClickBtn?: () => void;
  onClickDrop?: (item: string) => void;
  ref: RefObject<HTMLDivElement>;
  hideList: () => void;
};

const Dropdown = forwardRef(
  (
    {
      hideList,
      data,
      selected,
      isActive,
      style,
      onClickDrop,
      onClickBtn,
    }: DropdownProps,
    ref: Ref<HTMLDivElement>
  ) => {
    const elementLanguages = data.map((item: string, index: number) => {
      return (
        <StyledLi
          key={index + 1}
          tabIndex={0}
          onClick={() => onClickDrop && onClickDrop(item)}
        >
          {item}
        </StyledLi>
      );
    });

    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        const target = e.target as HTMLElement;

        if (!target.closest("#wrapper")) {
          hideList();
        }
      };

      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);

    return (
      <StyleDivDropdown ref={ref} style={style} id="wrapper">
        <StyledButton onClick={onClickBtn}>
          <StyledSpan className="dropdown-btn-text">
            {selected || data[0]}
          </StyledSpan>
          <StyledImg src={chevrondown} alt="Кнопка вниз" />
        </StyledButton>
        {isActive && <StyledUl>{elementLanguages}</StyledUl>}
      </StyleDivDropdown>
    );
  }
);

Dropdown.displayName = "Dropdown";

export default Dropdown as FC<
  DropdownProps & { ref?: RefObject<HTMLDivElement> }
>;
