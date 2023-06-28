import { createContext } from 'react';

const ContextCurrentQuestionNumb = createContext<
  [number, (item: number) => void]
  // eslint-disable-next-line
>([1, () => {}]);

const ContextLanguage = createContext<[string, (item: string) => void]>(
  // eslint-disable-next-line
  ['ru', () => {}],
);

export { ContextCurrentQuestionNumb, ContextLanguage };
