import { ref } from "firebase/database";
import { onValue } from "firebase/database";
import db from "../../../config/firebase/firebaseConfig";
import { RefObject } from "react";

interface IImageQuiz {
  currentQuestionNumb: number;
  wrapperImgRef: RefObject<HTMLDivElement>;
  imgRef: RefObject<HTMLImageElement>;
  sourceMobImgRef: RefObject<HTMLSourceElement>;
  sourceTabletImgRef: RefObject<HTMLSourceElement>;
  sourceDesktopImgRef: RefObject<HTMLSourceElement>;
}

const insertImageQuiz = (
    {currentQuestionNumb,
    wrapperImgRef,
    imgRef, sourceMobImgRef, sourceTabletImgRef, sourceDesktopImgRef}: IImageQuiz
  ) => {
    try{
      const wrapperImgElement = wrapperImgRef.current;
      onValue(
        ref(db, `questions/question${currentQuestionNumb}/images`),
        (snapshot) => {
          const imgSrc486 = snapshot.val().img486;
          const imgSrc768 = snapshot.val().img768;
          const imgSrcDefault = snapshot.val().imgDefault;
          const elementImage = imgRef.current;
          const sourceMobImage = sourceMobImgRef.current;
          const sourceTabletImg = sourceTabletImgRef.current;
          const sourceDesktopImg = sourceDesktopImgRef.current;
          if (wrapperImgElement && elementImage && sourceMobImage && sourceTabletImg && sourceDesktopImg) {
            wrapperImgElement.style.display = "block";
            elementImage.src = imgSrcDefault;
            sourceDesktopImg.srcset = imgSrcDefault;
            sourceMobImage.srcset = imgSrc486;
            sourceTabletImg.srcset = imgSrc768;
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