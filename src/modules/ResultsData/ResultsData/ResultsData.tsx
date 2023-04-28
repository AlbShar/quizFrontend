import {FC, useState, useEffect} from "react";

import Container from "../../../components/Container/Container";
import { getUserInfo } from "../api/getUserInfo";
import Spinner from "../../../UI/Spinner/Spinner";
import { transformSecondsToMinutes } from "../helpers/transformSecondsToMinutes";
import { getUserAnswers } from "../api/getUserAnswers";
import { getTotalQuestionsNumb } from "../../../api/getTotalQuestionsNumb";

import { StyledSection, StyledH2, StyledH3, StyledArticle } from "./ResultsData.Styled";

const ResultsData: FC = () => {

    type TPoints = {
        [key: string]: number
    };
    type TUserInfo = {
        time: number | false,
        points: false | null | TPoints,
        loading: boolean,
        error: boolean,
        totalQuestionNumbers: number | false | null

    };

    type TUserInfoDB = {
        name: string,
        email: string,
        quiantityPause: number,
        time: number,
      };

      type TAnswersDB = {
        [key: string]: {
            point: number,
            quantityPause: number,
            question: string,
            theme: string,
            userAnswer: string,
        }
    };

    const [userInfo, setUserInfo] = useState<TUserInfo>({
        time: 0,
        points: {},
        loading: true,
        error: false,
        totalQuestionNumbers: 56,
    });

    const getTotalPoints = (points: false | TPoints | null): number => {
        if (points) {
            return Object.values(points).reduce((sum, curr) => sum + curr, 0);
        } else return 0;
    };

    const getTime = (res: TUserInfoDB | null): number | null => {
        if (res) {
            const {time} = res;
            return time;
        } else {
            return null;
        }
    };

    const ansewrsTransform = (response: TAnswersDB | null) : TPoints | null => {
        if (response) {
        const points = Object.fromEntries(Object.entries({...response}).map(([key, value]) => [key, value.point]));
        return points;
        } else {
            return null;
        }
    };

    const onError = (error: any): never => {
        setUserInfo((state) => ({...state, loading: false, error: true}));
        throw new Error(error);
    };

    type TDataItem = { status: string, value: any };

    const dataHasLoaded = (data: TDataItem[]) => {
        type TDataInfo = {
            totalQuestionNumbers: number | false | null,
            time: number | false | null,
            points: TPoints | false | null,
        };

        const dataInfo: TDataInfo = {
            totalQuestionNumbers: false, 
            time: false, 
            points: false,
        };        

        const [userInfo, answers, totalQuestionNumbers] = data;

        dataInfo.time = getTime(userInfo.value);
        dataInfo.points = ansewrsTransform(answers.value);
        dataInfo.totalQuestionNumbers = totalQuestionNumbers.value;
        
        setUserInfo(function(state) {
            const {totalQuestionNumbers, time, points} = dataInfo;
            
            return {
                ...state,
                totalQuestionNumbers,
                time: time ? time : 0,
                points,
                loading: false,
                error: false,
              };
        });

        for (const key in dataInfo) {
            if (dataInfo[key] === null) {
                throw new Error(`The value of ${key} is ${dataInfo[key]}`);
            }
        }
    };

    const view = () => {
        return (
            <Container>
            <StyledSection>
                <StyledArticle >
                    <StyledH3>Ваш результат</StyledH3>
                    <StyledH2>{getTotalPoints(userInfo.points) + " из " + userInfo.totalQuestionNumbers}</StyledH2>
                </StyledArticle>
                <StyledArticle >
                    <StyledH3>Затраченное время</StyledH3>
                    <StyledH2>{transformSecondsToMinutes(userInfo.time)}</StyledH2>
                </StyledArticle>
            </StyledSection>
        </Container>
        );
    };

    const spinner = userInfo.loading ? <Spinner width={50} height={50} color="#fcfdff" margin="0 auto"/> : false;
    const errorMesage = "ERROR!!";
    const error = userInfo.error ? errorMesage : false;
    const content = !(userInfo.loading || userInfo.error) ? view() : false;

    useEffect(() => {
        Promise.allSettled([getUserInfo(), getUserAnswers(), getTotalQuestionsNumb()])
        .then((results) => {
            const dataItems: TDataItem[] = results.map((result) => ({
              status: result.status,
              value: result.status === "rejected" ? result.reason : result.value,
            }));
            dataHasLoaded(dataItems);
        })
        .catch(onError);
    }, []);

    return (
        <>
        {spinner} {error} {content}
        </>
    );
};

export default ResultsData;

