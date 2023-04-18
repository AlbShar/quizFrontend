import {  FocusEvent } from "react";


const setAnimateInputAndText = (
  // there should not be a comma at the end of line
  //eslint-disable-next-line
  e: FocusEvent<HTMLInputElement, Element> | FocusEvent<HTMLSelectElement, Element>, colorFocus: string
  ) => {
  (e.target as HTMLElement).style.transition = "all ease 0.3s";
  (e.target as HTMLElement).style.borderColor = colorFocus;
  ((e.target as HTMLElement).previousElementSibling as HTMLElement).style.color = colorFocus;
  };

  export {setAnimateInputAndText};