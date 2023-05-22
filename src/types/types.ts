type TInfoTheme = {
    totalPoints: number;
     totalQuantityQuestions: number
  };
  type TPointsByThemes = {
    [key: string]: TInfoTheme;
  };

  export type {TPointsByThemes};