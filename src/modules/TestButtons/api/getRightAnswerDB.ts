import { getDataFromDB } from '../../../api/getDataFromDB';

const getRightAnswerDB = async (currentQuestionNumb: number, lang: string) => {
  const url = `questions/question${currentQuestionNumb}/${lang}/rightAnswer`;

  try {
    const response = await getDataFromDB<string>(url);
    return response as string;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export { getRightAnswerDB };
