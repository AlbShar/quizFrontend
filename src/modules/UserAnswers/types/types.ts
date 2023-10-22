

type TAnswerOption = {
  [key: string]: string;
};

type TAnswerOptionsLangDB = {
  deu: TAnswerOption;
  en: TAnswerOption;
  ru: TAnswerOption;
};

type TQuestion = {
  [key: string]: {
    descr: string;
    name: string;
    rightAnswer: string;
    theme: string;
    img: string;
    id: number;
  };
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


type TUserAnswer = {
  point: number;
  userAnswer: string;
};

type UserAnswerData = {
  userAnswer: { point: number; userAnswer: string };
};

type AnswerItem = "A" | "B" | "C" | "D" | "E";

type QuestionData = {
  descr: string;
  name: string;
  rightAnswer: string;
  theme: string;
  img: string;
  id: number;
  answerOptions: Record<AnswerItem, string>;
};

export type DataQuestionAndUserAnswer = QuestionData & UserAnswerData;

type TInfoQuestionsAndAnswers = Record<number, DataQuestionAndUserAnswer>;

type Languages = 'ru' | 'en';

type StatusLoading = 'error' | 'success' | 'idle' | 'loading';

type DataTheme = {
  [key: string]: string;
  defaultValue: string;
};

type Topics = Record<Languages, DataTheme>;

type TInitialState = {
  userAnswersLoadingStatus: StatusLoading;
  userAnswers: TInfoQuestionsAndAnswers;
  themes: Topics;
  filterByTheme: string;
  filterByRight: string;
};

export type {
  TUserAnswer,
  TInitialState,
  TAnswerOption,
  TAnswerOptionsLangDB,
  TInfoQuiestionsDB,
  TAnswersDB,
  QuestionData,
  TInfoQuestionsAndAnswers,
  TQuestion,
};
