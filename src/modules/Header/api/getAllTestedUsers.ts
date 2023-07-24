import { getDataFromDB } from '../../../api/getDataFromDB';
import { getValueFromLocalStorage } from '../../../helpers/getValueFromLocalStorage';

type Users = {
  [key in string]: object
};

const transformData = (res: Users): number => {
  return Object.entries(res).length;
};

const getAllTestedUsers = async (url: string) => {

    try {
      const response = await getDataFromDB<Users>(url);
      const data = transformData(response as Users);

      return data;
    } catch (e) {
      console.error(e);
      throw e;
    }
  
};

export { getAllTestedUsers };
