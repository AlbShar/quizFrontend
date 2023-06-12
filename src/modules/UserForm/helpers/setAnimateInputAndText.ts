import { FocusEvent, KeyboardEvent } from 'react';

const setAnimateInputAndText = (
  // there should not be a comma at the end of line
  //eslint-disable-next-line
  e: FocusEvent<HTMLInputElement> | KeyboardEvent<HTMLInputElement>,
  color: string,
) => {
  (e.target as HTMLElement).style.transition = 'all ease 0.3s';
  (e.target as HTMLElement).style.borderColor = color;
  (
    (e.target as HTMLElement).previousElementSibling as HTMLElement
  ).style.color = color;
};

export { setAnimateInputAndText };
