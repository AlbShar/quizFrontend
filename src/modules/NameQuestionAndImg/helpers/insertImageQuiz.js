import { ref } from "firebase/database";
import { onValue } from "firebase/database";
import {db} from "../../../index";

const insertImageQuiz = (
    currentQuestionNumb,
    selectorWrapperImg,
    selectorImg
  ) => {
    try{
      const wrapperImg = document.querySelector(selectorWrapperImg);
      onValue(
        ref(db, `questions/question${currentQuestionNumb}/img`),
        (snapshot) => {
          const imgSrc = snapshot.val();
          if (imgSrc) {
            wrapperImg.style.display = "block";
            document.querySelector(selectorImg).src = imgSrc;
          } else {
            wrapperImg.style.display = "none";
          }
        }
      );
    }
    catch(error) {
      console.error(error)
    }
  
  };

  export {insertImageQuiz};