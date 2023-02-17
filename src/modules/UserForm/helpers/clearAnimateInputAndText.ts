import {  FocusEvent } from "react";

const clearAnimateInputAndText = (e: FocusEvent<HTMLInputElement, Element > | FocusEvent<HTMLSelectElement, Element>, colorInitial: string) => {
    (e.target as HTMLElement).style.borderColor = colorInitial;
    ((e.target as HTMLElement).previousElementSibling as HTMLElement).style.color = colorInitial;
  };

  export {clearAnimateInputAndText};