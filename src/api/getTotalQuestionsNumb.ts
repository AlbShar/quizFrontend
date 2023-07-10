import { getDataFromDB } from './getDataFromDB';

type TotalQuestions = {
  [key: string]: string;
};

const transformData = (data: TotalQuestions): number => {
  return Object.entries(data).length;
};

const getTotalQuestionsNumb = async (url: string): Promise<number> => {
  try {
    const response = await getDataFromDB<TotalQuestions>(url);
    const data = transformData(response as TotalQuestions);
    return data;

  } catch (e) {
    console.error(e);
    throw e;
  }
};

export { getTotalQuestionsNumb };
