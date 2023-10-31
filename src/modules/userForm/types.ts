export type TErrors = {
  [key in string]: string;
};

export type TDataInput = {
  name: string;
  type: string;
  placeholder?: string;
  text: string;
};
