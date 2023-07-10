
type TPoints = {
  [key: string]: number;
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

export type { TPoints, TAnswersDB };