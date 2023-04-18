import { update } from "firebase/database";
import { ref } from "firebase/database";

import db from "../../../config/firebase/firebaseConfig";

interface IUserData {
  name: string | "User";
  email: string | "No email";
  age: number | "No age";
  gender: string | "No gender";
}

const sendUserInfoDB = async (idUser: string) => {
    try {
      const userName = document.querySelector<HTMLInputElement>("#username")?.value;
      const userEmail = document.querySelector<HTMLInputElement>("#useremail")?.value;
      const userAge = document.querySelector<HTMLInputElement> ("select")?.value;
      const userGender = document.querySelector<HTMLInputElement> ("#userman")?.checked
        ? "man"
        : document.querySelector<HTMLInputElement> ("#userwoman")?.checked
        ? "woman"
        : null;
  
      const referenceUserAnswers = ref(db, `users/user${idUser}/userInfo`);
      update(referenceUserAnswers, {
        name: userName,
        email: userEmail,
        age: userAge,
        gender: userGender,
      } as IUserData);
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(`${error.message}`);
      } else {
        throw new Error(`Unknown error caught: ${error}`);
      }
    }
  };

export {sendUserInfoDB};