import { fetchData } from '../../../api/fetchData';

const getThemeQuestion = async (url: string) => {
  try {
    const response = await fetchData<string>(url);

    return response;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export { getThemeQuestion };
