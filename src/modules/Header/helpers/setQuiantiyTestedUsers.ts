import { getAllTestedUsers } from "./getAllTestedUsers";

const setQuiantiyTestedUsers = async (selectorQuantityTestedUsers: string) => {
    try {
      const quiantiyAllUsers: number = await getAllTestedUsers();
      (document.querySelector(selectorQuantityTestedUsers) as HTMLHtmlElement).textContent = quiantiyAllUsers.toString();
    } catch (error) {
      console.error(error);
    }
  };

  export {setQuiantiyTestedUsers};