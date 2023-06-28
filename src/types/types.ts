type TInfoTheme = {
  totalPoints: number;
  totalQuantityQuestions: number;
};
type TPointsByThemes = {
  [key: string]: TInfoTheme;
};
type InfoTestBlock = {
  alt: string;
  text: string;
  srcIcon: string;
};

type InfoBlocks = {
  title: string;
  img?: string;
  id?: string;
  alt?: string;
  text: string;
};
type JSONText = {
  selector: string;
  json: string;
};

type FooterInfo = {
  text: string;
  link: '/reportbug' | '/reestablish' | '/politics';
}

export type {
  TPointsByThemes,
  InfoTestBlock,
  InfoBlocks,
  JSONText,
  FooterInfo,
};
