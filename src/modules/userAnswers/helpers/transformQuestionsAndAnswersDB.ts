import type {
  
  TAnswersDB,
  TAnswerOptionsLangDB,
  TInfoQuiestionsDB,
  
} from '../types/types';

import { getNumberFromKey } from './getNumberFromKey';

 const transformUserAnswers = (res: TAnswersDB) => {
   const updateUserAnswers = Object.fromEntries(
     Object.entries(res).map(([key, value]) => [
       getNumberFromKey(key),
       { point: value.point, userAnswer: value.userAnswer },
     ]),
   );
   return updateUserAnswers;
 };

 const transformData = (
   res: TAnswerOptionsLangDB | TInfoQuiestionsDB,
   lang: string,
 ) => {
   const updateAnswerOptions = Object.fromEntries(
     Object.entries(res).map(([key, value]) => [
       getNumberFromKey(key),
       value[`${lang}`],
     ]),
   );
   return updateAnswerOptions;
 };

export const transformQuestionsAndAnswersDB = (
  res: (TAnswersDB | TAnswerOptionsLangDB | TInfoQuiestionsDB)[], lang: string
) => {
  const [userAnswers, answerOptions, infoQuestions] = res;

  const data = {
    userAnswers: transformUserAnswers(userAnswers as TAnswersDB),
    answerOptions: transformData(answerOptions as TAnswerOptionsLangDB, lang),
    infoQuestions: transformData(infoQuestions as TInfoQuiestionsDB, lang),
  };


  const generalInfo = {};

  for (const key in data.infoQuestions) {
    generalInfo[key] = {
      ...data.infoQuestions[key],
      userAnswer: data.userAnswers[key],
      answerOptions: data.answerOptions[key],
    };
  }

  return generalInfo;
};
