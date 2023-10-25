import { getDataFromDB } from "api/getDataFromDB";

type Questions = {
  [key in string]: object;
};

const transformData = (question: Questions, lang: string): number => {
  const themes = new Set();
  const themesDb = Object.values(question).map(question => question[lang].theme);

  for (const theme of themesDb) {
    themes.add(theme);
  }

  return themes.size ;
};

const getQuantityThemes = async (url: string, lang: string) => {
 try {
   const response = await getDataFromDB<Questions>(url);
  const data = transformData(response as Questions, lang);

   return data;
 } catch (e) {
   console.error(e);
   throw e;
 }
};

export { getQuantityThemes };
