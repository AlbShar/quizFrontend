import { getAllTestedUsers } from "./getAllTestedUsers";
import { RefObject } from "react";

const setQuiantiyTestedUsers = async (totalUsersElementRef: RefObject<HTMLSpanElement>) => {
    try {
      const quiantiyAllUsers: number = await getAllTestedUsers();
      if (totalUsersElementRef.current) {
        totalUsersElementRef.current.textContent = quiantiyAllUsers.toString();
      }
    } catch (error) {
      console.error(error);
    }
  };

  export {setQuiantiyTestedUsers};