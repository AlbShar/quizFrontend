import { fetchData } from 'api/fetchData';

import { transformData } from './mappers/transformData';

import type { Questions } from './types';

const getQuantityThemes = async (url: string, lang: string) => {
  try {
    const response = await fetchData<Questions>(url);
    const data = transformData(response as Questions, lang);

    return data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export { getQuantityThemes };
