import { getDataFromDB } from "../../../api/getDataFromDB";

import type { TAnswersDB } from '../types';

const getUserAnswers = async (url: string) => {
    try {
      const response = await getDataFromDB<TAnswersDB>(url);

      return response;
    } catch (e) {
      console.error(e);
      throw e;
    }
};

export { getUserAnswers };
