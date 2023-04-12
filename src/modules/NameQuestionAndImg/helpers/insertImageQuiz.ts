import { ref } from "firebase/database";
import { onValue } from "firebase/database";
import { RefObject } from "react";

import db from "../../../config/firebase/firebaseConfig";

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
    imgRef, sourceMobImgRef, sourceTabletImgRef, sourceDesktopImgRef}: IImageQuiz,
  ) => {
    try{
      const wrapperImgElement = wrapperImgRef.current;
      const elementImage = imgRef.current;
      const sourceMobImage = sourceMobImgRef.current;
      const sourceTabletImg = sourceTabletImgRef.current;
      const sourceDesktopImg = sourceDesktopImgRef.current;

      onValue(
        ref(db, `questions/question${currentQuestionNumb}/images`),
        (snapshot) => {
          const imgSrc = snapshot.val();

          if (imgSrc && wrapperImgElement && elementImage && sourceMobImage && sourceTabletImg && sourceDesktopImg) {
            const imgSrc486 = imgSrc.img486;
            const imgSrc768 = imgSrc.img768;
            const imgSrcDefault = imgSrc.imgDefault;  
            wrapperImgElement.style.display = "block";
            elementImage.src = imgSrcDefault;
            sourceDesktopImg.srcset = imgSrcDefault;
            sourceMobImage.srcset = imgSrc486;
            sourceTabletImg.srcset = imgSrc768;
          } else if (wrapperImgElement) {
            wrapperImgElement.style.display = "none";
          }
        },
      );
    }
    catch(error) {
      console.error(error);
    }
  
  };

  export {insertImageQuiz};