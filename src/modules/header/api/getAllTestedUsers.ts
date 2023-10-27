import { fetchData } from '../../../api/fetchData';
import { getValueFromLocalStorage } from '../../../helpers/getValueFromLocalStorage';

type Users = {
  [key in string]: object
};

const transformData = (res: Users): number => {
  return Object.entries(res).length;
};

const getAllTestedUsers = async (url: string) => {

    try {
      const response = await fetchData<Users>(url);
      const data = transformData(response as Users);

      return data;
    } catch (e) {
      console.error(e);
      throw e;
    }
  
};

export { getAllTestedUsers };
