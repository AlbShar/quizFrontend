import { getDataFromDB } from '../../../api/getDataFromDB';

const getRightAnswerDB = async (
  profession: string, 
  currentQuestionNumb: number,
  lang: string,
) => {
  const url = `${profession}/questions/question${currentQuestionNumb}/${lang}/rightAnswer`;

  try {
    const response = await getDataFromDB<string>(url);
    return response as string;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export { getRightAnswerDB };
