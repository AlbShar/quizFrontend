import type { TQuestion, Languages } from 'types/types';

export type Questions = {
  [key in string]: Record<Languages, TQuestion>;
};
