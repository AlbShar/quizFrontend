import { fetchData } from '../../../api/fetchData';

import type { AnswersType } from '../type';

const getAnswersOptions = async (url: string): Promise<AnswersType> => {
  try {
    const response = await fetchData<AnswersType>(url);
    return response as AnswersType;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export { getAnswersOptions };
