import { push } from "firebase/database";
import { ref } from "firebase/database";
import {db} from "../../../index";


export const createIdUser = () => {
    const idUser = push(ref(db, `users/user`)).key;
    localStorage.setItem("idUser", idUser);
  };