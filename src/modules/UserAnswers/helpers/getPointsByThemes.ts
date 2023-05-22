import getThemes from "./getThemes";

import type { TInfoQuestionsAndAnswers } from "../types/types";
import type { TPointsByThemes } from "../../../types/types";


const getPointsByThemes = (data: TInfoQuestionsAndAnswers): TPointsByThemes => {
    const themes = getThemes(data).filter((item, i) => i > 0);
    const updateData = Object.values(data).map(item => ({theme: item.theme, point: item.userAnswer.point}));
    const pointsByThemes = {}; 

    for (const theme of themes) {
        for (const key in updateData) {
            if (theme === updateData[key].theme) {
                if (!pointsByThemes[theme]) {
                    pointsByThemes[theme] = { totalPoints: 0, totalQuantityQuestions: 0 };
                  }
                  pointsByThemes[theme].totalPoints += updateData[key].point;
                  pointsByThemes[theme].totalQuantityQuestions += 1;
                }
        }
    }
    return pointsByThemes;
};

export default getPointsByThemes;