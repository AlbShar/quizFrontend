import { fetchData } from 'api/fetchData';

import type { TQuestion } from 'types/types';

export const fetchQuestionInfo = async (url: string): Promise<TQuestion> => {
  try {
    const response = await fetchData<TQuestion>(url);
    return response as TQuestion;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
