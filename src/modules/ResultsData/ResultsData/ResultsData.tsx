import {FC, useState, useEffect} from "react";

import Container from "../../../components/Container/Container";
import { getUserInfo } from "../api/getUserInfo";
import Spinner from "../../../UI/Spinner/Spinner";
import { transformSecondsToMinutes } from "../helpers/transformSecondsToMinutes";
import { getUserAnswers } from "../api/getUserAnswers";

import { StyledSection, StyledH2, StyledH3, StyledArticle } from "./ResultsData.Styled";

const ResultsData: FC = () => {

    type TPoints = {
        [key: string]: number
    };
    type TUserInfo = {
        time: number,
        points: TPoints,
        loading: boolean,
        error: boolean,
    };

    type TUserInfoDB = {
        name: string,
        email: string,
        quiantityPause: number,
        time: number
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
    });

    const getTotalPoints = (points: TPoints): string => {
        return `${Object.values(points).reduce((sum, curr) => sum + curr, 0)} балла`;
    };

    const timeHasLoaded = (response: TUserInfoDB) => {
        const {time} = response;
        setUserInfo((state) => ({...state, loading: false, time}));
    };

    const ansewrsHasLoaded = (response: TAnswersDB) => {
        const points = Object.fromEntries(Object.entries({...response}).map(([key, value]) => [key, value.point]));
        setUserInfo((state) => ({...state, loading: false, points}));
    };

    const onError = (error: any): never => {
        setUserInfo((state) => ({...state, loading: false, error: true}));
        throw new Error(error);
    };

    const view = () => {
        return (
            <Container>
            <StyledSection>
                <StyledArticle >
                    <StyledH3>Ваш результат</StyledH3>
                    <StyledH2>{getTotalPoints(userInfo.points)}</StyledH2>
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
        getUserInfo().then(timeHasLoaded).catch(onError);
        getUserAnswers().then(ansewrsHasLoaded).catch(onError);
    }, []);

    return (
        <>
        {spinner} {error} {content}
        </>
    );
};

export default ResultsData;

