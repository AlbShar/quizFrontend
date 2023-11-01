import { createContext } from 'react';

import type { Languages } from 'types/types';

const ContextCurrentQuestionNumb = createContext<
  [number, (item: number) => void]
  // eslint-disable-next-line
>([1, () => {}]);

const ContextLanguage = createContext<[Languages, (item: Languages) => void]>(
  // eslint-disable-next-line
  ['ru', () => {}],
);

const ContextIdUser = createContext<[string, (item: string) => void]>(
  // eslint-disable-next-line
  ['', () => {}],
);

const ContextProfession = createContext<[string, (item: string) => void]>(
  // eslint-disable-next-line
  ['', () => {}],
);

export {
  ContextCurrentQuestionNumb,
  ContextLanguage,
  ContextIdUser,
  ContextProfession,
};
