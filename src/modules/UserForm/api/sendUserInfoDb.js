import { update } from "firebase/database";
import { ref } from "firebase/database";
import {db} from "../../../index";

const sendUserInfoDB = async (idUser) => {
    try {
      const userName = document.querySelector("#username").value;
      const userEmail = document.querySelector("#useremail").value;
      const userAge = document.querySelector("select").value;
      const userGender = document.querySelector("#userman").checked
        ? "man"
        : document.querySelector("#userwoman").checked
        ? "woman"
        : null;
  
      const referenceUserAnswers = ref(db, `users/user${idUser}/userInfo`);
      update(referenceUserAnswers, {
        name: userName,
        email: userEmail,
        age: userAge,
        gender: userGender,
      });
    } catch (error) {
      console.error(error);
    }
  };

export {sendUserInfoDB};