import { ref } from "firebase/database";
import { onValue } from "firebase/database";
import db from "../../../config/firebase/firebaseConfig";

const insertImageQuiz = (
    currentQuestionNumb: number,
    selectorWrapperImg: string,
    selectorImg: string
  ) => {
    try{
      const wrapperImg = document.querySelector<HTMLElement>(selectorWrapperImg);
      onValue(
        ref(db, `questions/question${currentQuestionNumb}/img`),
        (snapshot) => {
          const imgSrc: string = snapshot.val();
          const elementImage = document.querySelector<HTMLImageElement>(selectorImg);
          if (imgSrc && wrapperImg && elementImage) {
            wrapperImg.style.display = "block";
            elementImage.src = imgSrc;
          } else if (wrapperImg) {
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