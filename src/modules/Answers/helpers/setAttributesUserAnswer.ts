import {MouseEvent} from "react";

interface IAttributesUserAnswer {
  e: MouseEvent;
  selectorAnswers: string;
  cssBorder: string;
  nameDataAtrr: string;

}

const setAttributesUserAnswer = (
  {e,
  selectorAnswers,
  cssBorder,
  nameDataAtrr}: IAttributesUserAnswer,
) => {
  document.querySelectorAll<HTMLElement>(selectorAnswers).forEach((item: HTMLElement) => {
    item.style.cssText = "";
    item.removeAttribute(nameDataAtrr);
  });
  (e.target as HTMLElement).style.border = cssBorder;
  (e.target as HTMLElement).setAttribute(nameDataAtrr, "true");

};

export { setAttributesUserAnswer };
