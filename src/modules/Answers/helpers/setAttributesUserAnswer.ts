import {MouseEvent} from 'react';


const setAttributesUserAnswer = (
  e: MouseEvent,
  selectorAnswers: string,
  cssBorder: string,
  nameDataAtrr: string,
) => {
  document.querySelectorAll<HTMLElement>(selectorAnswers).forEach((item: HTMLElement) => {
    item.style.cssText = "";
    item.removeAttribute(nameDataAtrr);
  });
  (e.target as HTMLElement).style.border = cssBorder;
  (e.target as HTMLElement).setAttribute(nameDataAtrr, 'true');

};

export { setAttributesUserAnswer };
