import { getDataFromDB } from '../../../api/getDataFromDB';

const getThemeQuestion = async (url: string) => {
  try {
    const response = await getDataFromDB<string>(url);

    return response;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export { getThemeQuestion };
