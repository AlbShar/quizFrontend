export type InfoBlocks = {
  title: string;
  img?: string;
  id?: string;
  alt?: string;
  text: string;
};

export type FooterInfo = {
  profession: string;
  name: string;
  link: string;
};

export type TQuestion = {
  descr: string;
  name: string;
  rightAnswer: string;
  theme: string;
  img: string;
  id: number;
};

export type Languages = 'en' | 'ru';
