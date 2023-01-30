import { getAllTestedUsers } from "./getAllTestedUsers";

const setQuiantiyTestedUsers = async (selectorQuantityTestedUsers) => {
    try {
      const quiantiyAllUsers = await getAllTestedUsers();
      document.querySelector(selectorQuantityTestedUsers).textContent =
        quiantiyAllUsers;
    } catch (error) {
      console.error(error);
    }
  };

  export {setQuiantiyTestedUsers};