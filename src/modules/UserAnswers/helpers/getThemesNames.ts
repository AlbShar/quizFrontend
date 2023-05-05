type TUserAnswer = {
    point: number;
    userAnswer: string;
  }
  
  type TAnswerOption = {
    [key: string]: string;
  }

type TQuestionAndAnswer = {
    descr: string;
    name: string;
    rightAnswer: string;
    theme: string;
    img: string;
    answerOptions: TAnswerOption;
    userAnswer: TUserAnswer;
  }

  type TInfoQuestionsAndAnswers = {
    [key: number]: TQuestionAndAnswer
  };

  

const getThemesNames = (infoQuestionsAndAnswers: TInfoQuestionsAndAnswers): string[] => {
    const themesNames = new Set(["Все тематики"]);
    const allThemes = Object.values(infoQuestionsAndAnswers).map(infoQuestion => infoQuestion.theme);
    allThemes.forEach(theme => themesNames.add(theme));
    
    return Array.from(themesNames) as string[];

};

export {getThemesNames};