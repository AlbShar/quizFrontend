import { ref } from "firebase/database";
import { onValue } from "firebase/database";
import db from "../../../config/firebase/firebaseConfig";
import { RefObject } from "react";

interface IImageQuiz {
  currentQuestionNumb: number;
  wrapperImgRef: RefObject<HTMLDivElement>;
  imgRef: RefObject<HTMLImageElement>;
}

const insertImageQuiz = (
    {currentQuestionNumb,
    wrapperImgRef,
    imgRef}: IImageQuiz
  ) => {
    try{
      const wrapperImgElement = wrapperImgRef.current;
      onValue(
        ref(db, `questions/question${currentQuestionNumb}/img`),
        (snapshot) => {
          const imgSrc: string = snapshot.val();
          const elementImage = imgRef.current;
          if (imgSrc && wrapperImgElement && elementImage) {
            wrapperImgElement.style.display = "block";
            elementImage.src = imgSrc;
          } else if (wrapperImgElement) {
            wrapperImgElement.style.display = "none";
          }
        }
      );
    }
    catch(error) {
      console.error(error)
    }
  
  };

  export {insertImageQuiz};