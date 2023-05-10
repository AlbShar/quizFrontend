import { useState, FC, useEffect } from "react";
import { useTranslation } from "react-i18next";

import Container from "../../../components/Container/Container";
import FilterByRight from "../components/FilterByRight/FilterByRight";
import FilterByThemes from "../components/FilterByThemes/FilterByThemes";
import { getAnswerOptions } from "../api/getAnswerOptions";
import { getUserAnswers } from "../api/getUserAnswers";
import { getInfoQuestions } from "../api/getInfoQuestions";
import Spinner from "../../../UI/Spinner/Spinner";
import { getNumberFromKey } from "../helpers/getNumberFromKey";
import { getThemesNames } from "../helpers/getThemesNames";

import {
  StyledLi,
  StyledListAnswers,
  StyledUl,
  StyledSpan,
  StyledSpanResult,
  StyledSum,
  StyledSection,
} from "./UserAnswers.Styled";

type TUserAnswer = {
  point: number;
  userAnswer: string;
};

type TAnswerOption = {
  [key: string]: string;
};

type TAnswerOptionsLangDB = {
  deu: TAnswerOption;
  en: TAnswerOption;
  ru: TAnswerOption;
};

type TQuestion = {
  descr: string;
  name: string;
  rightAnswer: string;
  theme: string;
  img: string;
  id: number;
};

type TInfoQuiestionsDB = {
  deu: TQuestion;
  en: TQuestion;
  ru: TQuestion;
};

type TAnswersDB = {
  [key: string]: {
    point: number;
    quantityPause: number;
    question: string;
    theme: string;
    userAnswer: string;
  };
};

type TQuestionAndAnswer = {
  descr: string;
  name: string;
  rightAnswer: string;
  theme: string;
  img: string;
  answerOptions: TAnswerOption;
  userAnswer: TUserAnswer;
  id: number;
};

type TInfoQuestionsAndAnswers = {
  [key: number]: TQuestionAndAnswer;
};

const UserAnswers: FC = () => {
  const { t } = useTranslation();

  type TState = {
    infoQuestionsAndAnswers: null | TInfoQuestionsAndAnswers;
    error: boolean;
    loading: boolean;
    filterByTheme: string;
    filterByRight: string;
  };

  const [state, setState] = useState<TState>({
    infoQuestionsAndAnswers: null,
    error: false,
    loading: true,
    filterByTheme: "",
    filterByRight: "",
  });

  const getThemes = (): [string, ...string[]] => {
    if (state.infoQuestionsAndAnswers) {
      return getThemesNames(
        state.infoQuestionsAndAnswers as TInfoQuestionsAndAnswers
      );
    } else {
      return [""];
    }
  };

  const filterByThemes = (
    data: TInfoQuestionsAndAnswers,
    filter: TState["filterByTheme"],
  ): TInfoQuestionsAndAnswers => {
    const transformData = Object.values(data);
    const themes = getThemes().filter((item, index) => index > 0);

    for (let i = 0; i < themes.length; i++) {
      if (filter === themes[i]) {
        return transformData.filter((question) => question.theme === themes[i]);
      }
    }

    return transformData;
  };

  const filterByRightAnswer = (
    data: TInfoQuestionsAndAnswers,
    typeAnswer: TState["filterByRight"]
  ) => {
    const transformData = Object.values(data);

    switch (typeAnswer) {
      case "Верно":
        return transformData.filter(
          (question) => question?.userAnswer?.point === 1
        );
      case "Неверно":
        return transformData.filter(
          (question) => question?.userAnswer?.point === 0
        );
      default:
        return transformData;
    }
  };

  const errorMessage = "ERORR!";
  const loading = state.loading ? (
    <Spinner width={50} height={50} color={"#1f2ce0"} margin="0 auto" />
  ) : (
    false
  );
  const error = state.error ? errorMessage : false;
  const view = () => {
    if (state.infoQuestionsAndAnswers) {
      const visibleData: TInfoQuestionsAndAnswers = filterByRightAnswer(
        filterByThemes(state.infoQuestionsAndAnswers, state.filterByTheme),
        state.filterByRight
      );
      return (
        <StyledUl>
          {Object.entries(visibleData as TQuestionAndAnswer[]).map(
            (userAnswerArr, index) => {
              const {
                descr,
                img,
                id,
                name,
                rightAnswer,
                theme,
                answerOptions,
                userAnswer,
              } = userAnswerArr[1];
              const isRight = userAnswer.point ? true : false;
              const color = isRight ? "green" : "red";
              const className = {
                borderRadius: 10,
                border: `1px solid ${color}`,
              };

              return (
                <StyledListAnswers style={className} key={index + 1}>
                  <StyledUl>
                    <StyledSpanResult isRight={isRight}>
                      {isRight ? "\u2714" : "\u2718"}
                    </StyledSpanResult>
                    <StyledLi>
                      <StyledSpan>{`Вопрос № ${id}: `}</StyledSpan>
                      {`${name} (${theme})`}
                    </StyledLi>
                    {img === "No" ? (
                      false
                    ) : (
                      <StyledLi>
                        <img
                          style={{ maxWidth: "100%" }}
                          src={img}
                          alt="code"
                        />
                      </StyledLi>
                    )}
                    <StyledLi>
                      <StyledSpan>{`${t("Варианты_ответов")}: `}</StyledSpan>
                      {Object.entries(answerOptions)
                        .map(([key, value]) => `${key}: ${value}`)
                        .join(", ")}
                    </StyledLi>
                    <StyledLi>
                      <StyledSpan>{`${t("Ваш_ответ")}: `}</StyledSpan>{" "}
                      {userAnswer.userAnswer}
                    </StyledLi>
                    {isRight ? (
                      false
                    ) : (
                      <StyledLi>
                        <StyledSpan>{`${t("Правильный_ответ")}: `}</StyledSpan>
                        {rightAnswer}
                      </StyledLi>
                    )}
                    <StyledLi>
                      <StyledSpan>{`${t("Объяснение")}: `} </StyledSpan>
                      {descr}
                    </StyledLi>
                  </StyledUl>
                </StyledListAnswers>
              );
            }
          )}
        </StyledUl>
      );
    }
  };
  const content = !(state.error || state.error) ? view() : null;

  const transformUserAnswers = (res: TAnswersDB) => {
    const updateUserAnswers = Object.fromEntries(
      Object.entries(res).map(([key, value]) => [
        getNumberFromKey(key),
        { point: value.point, userAnswer: value.userAnswer },
      ])
    );
    return updateUserAnswers;
  };

  const transformData = (res: TAnswerOptionsLangDB | TInfoQuiestionsDB) => {
    const lang: string =
      document.querySelector("html")?.getAttribute("lang") || "ru";
    const updateAnswerOptions = Object.fromEntries(
      Object.entries(res).map(([key, value]) => [
        getNumberFromKey(key),
        value[lang],
      ])
    );
    return updateAnswerOptions;
  };

  const transformQuestionsAndAnswersDB = (
    res: (TAnswersDB | TAnswerOptionsLangDB | TInfoQuiestionsDB)[]
  ) => {
    const [userAnswers, answerOptions, infoQuestions] = res;

    const data = {
      userAnswers: transformUserAnswers(userAnswers as TAnswersDB),
      answerOptions: transformData(answerOptions as TAnswerOptionsLangDB),
      infoQuestions: transformData(infoQuestions as TInfoQuiestionsDB),
    };

    const generalInfo = {};

    for (const key in data.infoQuestions) {
      generalInfo[key] = {
        ...data.infoQuestions[key],
        userAnswer: data.userAnswers[key],
        answerOptions: data.answerOptions[key],
      };
    }

    setState((state) => ({
      ...state,
      infoQuestionsAndAnswers: generalInfo,
      loading: false,
    }));
  };

  const onError = (error: any): never => {
    setState((state) => ({ ...state, error: true }));
    throw new Error(error);
  };

  const setFilterByTheme = (newFilter: string): void => {
    setState((state) => ({ ...state, filterByTheme: newFilter }));
  };

  const setFilterByRightAnswer = (newFilter: string): void => {
    setState((state) => ({ ...state, filterByRight: newFilter }));
  };

  useEffect(() => {
    Promise.all([getUserAnswers(), getAnswerOptions(), getInfoQuestions()])
      .then((value) =>
        transformQuestionsAndAnswersDB(
          value as (TAnswersDB | TAnswerOptionsLangDB | TInfoQuiestionsDB)[]
        )
      )
      .catch(onError);
  }, []);

  return (
    <Container>
      <details open>
        <StyledSum>{t("Ответы")}</StyledSum>
        <StyledSection>
          <FilterByThemes
            themesNames={getThemes()}
            setFilterByTheme={setFilterByTheme}
          />
          <FilterByRight
            setFilterByRightAnswer={setFilterByRightAnswer}
          />
        </StyledSection>
        {loading} {error} {content}
      </details>
    </Container>
  );
};

export default UserAnswers;
