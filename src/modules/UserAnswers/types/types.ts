type TUserAnswer = {
  point: number;
  userAnswer: string;
};

type TAnswerOption = {
  [key: string]: string;
};

type TAnswerOptionsLangDB = {
  deu: TAnswerOption;
  en: TAnswerOption;
  ru: TAnswerOption;
};

type TQuestion = {
  descr: string;
  name: string;
  rightAnswer: string;
  theme: string;
  img: string;
  id: number;
};

type TInfoQuiestionsDB = {
  deu: TQuestion;
  en: TQuestion;
  ru: TQuestion;
};

type TAnswersDB = {
  [key: string]: {
    point: number;
    quantityPause: number;
    question: string;
    theme: string;
    userAnswer: string;
  };
};

type TQuestionAndAnswer = {
  descr: string;
  name: string;
  rightAnswer: string;
  theme: string;
  img: string;
  answerOptions: TAnswerOption;
  userAnswer: TUserAnswer;
  id: number;
};

type TInfoQuestionsAndAnswers = {
  [key: number]: TQuestionAndAnswer;
};

type TInitialState = {
  userAnswersLoadingStatus: 'error' | 'success' | 'idle' | 'loading';
  userAnswers: TInfoQuestionsAndAnswers;
  themes: string[];
};

export type {
  TUserAnswer,
  TInitialState,
  TAnswerOption,
  TAnswerOptionsLangDB,
  TInfoQuiestionsDB,
  TAnswersDB,
  TQuestionAndAnswer,
  TInfoQuestionsAndAnswers,
};
