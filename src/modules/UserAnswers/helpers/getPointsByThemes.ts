import getThemes from "./getThemes";

import type { TInfoQuestionsAndAnswers, TPointsByThemes } from "../types/types";


const getPointsByThemes = (data: TInfoQuestionsAndAnswers): TPointsByThemes => {
    const themes = getThemes(data).filter((item, i) => i > 0);
    const updateData = Object.values(data).map(item => ({theme: item.theme, point: item.userAnswer.point}));
    const pointsByThemes = {}; 

    for (const theme of themes) {
        for (const key in updateData) {
            if (theme === updateData[key].theme) {
                pointsByThemes[theme] = (updateData[key].point || 0) + updateData[key].point;
            }
        }
    }
    
    return pointsByThemes;
};

export default getPointsByThemes;