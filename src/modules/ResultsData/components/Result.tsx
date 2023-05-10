import {FC, useEffect, useState} from "react";

import {
  StyledH2,
  StyledH3,
  StyledArticle,
} from "../ResultsData/ResultsData.Styled";
import Spinner from "../../../UI/Spinner/Spinner";
import { getTotalQuestionsNumb } from "../../../api/getTotalQuestionsNumb";
import { getUserAnswers } from "../api/getUserAnswers";


const Result: FC = () => {
    type TState = {
        points: {
            [key: string]: number
        } | false | null,
        error: boolean,
        loading: boolean,
        totalQuestionNumbers: number | false | null,
    };

    type TAnswersDB = {
        [key: string]: {
            point: number,
            quantityPause: number,
            question: string,
            theme: string,
            userAnswer: string,
        }};

    const [state, setState] = useState<TState>({
        error: false,
        loading: true,
        points: false,
        totalQuestionNumbers: false,
    });

    const ansewrsTransform = (response: TAnswersDB | null) : TState["points"] | null => {
        if (response) {
        const points = Object.fromEntries(Object.entries({...response}).map(([key, value]) => [key, value.point]));
        return points;
        } else {
            return null;
        }
    };

    const dataHasLoaded = (data: any) => {
        type TdataInfo = {
            points: TState["points"],
            totalQuestionNumbers: TState["totalQuestionNumbers"]
        };

        const dataInfo: TdataInfo = {
            points: false,
            totalQuestionNumbers: false,
        };
        
        const [totalQuestionNumbers, answers] = data;

        dataInfo.points = ansewrsTransform(answers.value);
        dataInfo.totalQuestionNumbers = (totalQuestionNumbers.value) 
        ? totalQuestionNumbers.value : (totalQuestionNumbers.value === false) ? false : null;

        setState(function(state) {
            const {totalQuestionNumbers, points} = dataInfo;
            
            return {
                ...state,
                totalQuestionNumbers,
                points,
                loading: false,
              };
        });

        for (const key in dataInfo) {
            if (dataInfo[key] === null) {
                throw new Error(`The value of ${key} is ${dataInfo[key]} in ${dataInfo}`);
            }
        }
    };

    const getTotalPoints = (points: false | TState["points"] | null): number => {
        if (points) {
            return Object.values(points).reduce((sum, curr) => sum + curr, 0);
        } else return 0;
    };

    const onError = (error: any): never => {
        setState((state) => ({...state, loading: false, error: true}));
        throw new Error(error);
    };

    useEffect(() => {
        Promise.allSettled([getTotalQuestionsNumb(), getUserAnswers()]).then(dataHasLoaded).catch(onError);
    }, []);

    const view = () => {
        return (
            <StyledArticle>
            <StyledH3>Ваш результат</StyledH3>
            <StyledH2>
              {getTotalPoints(state.points) + " из " + state.totalQuestionNumbers}
            </StyledH2>
          </StyledArticle>
        );
    };

    const spinner = state.loading ? <Spinner width = {50} height={50} color={"#1f2ce0"} margin="0 auto"/> : false;
    const errorMessage = "ERROR!";
    const error = state.error ? errorMessage : false;
    const content = !(state.loading || state.error) ? view() : false;



  return (
    <>
    {spinner} {error} {content}
    </>
  );
};

export default Result;
