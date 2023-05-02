import { useState, FC, useEffect } from "react";

import Container from "../../../components/Container/Container";
import DropdownIsRight from "../components/DropdownIsRight/DropdownIsRight";
import DropDownThemes from "../components/DropdownThemes/DropDownThemes";
import { getAnswerOptions } from "../api/getAnswerOptions";
import { getUserAnswers } from "../api/getUserAnswers";
import { getInfoQuestions } from "../api/getInfoQuestions";

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
}

type TUserAnswers = {
  [key: string] : TUserAnswer
}

type TAnswerOption = {
  [key: string]: string;
}

type TAnswerOptions = {
  [key: number]: {
    [key: string]: TAnswerOption;
  };
}

type TAnswerOptionsLangDB = {
    deu: TAnswerOption,
    en: TAnswerOption,
    ru: TAnswerOption,
}

type TAnswerOptionsDB = {
  [key: string]: TAnswerOptionsLangDB;
}

type TQuestion = {
  descr: string;
  name: string;
  rightAnswer: string;
  theme: string;
  img: string;
}

type TInfoQuiestions = {
  [key: number]: TQuestion;
}

type TInfoQuiestionsDB = {
  deu: TQuestion,
  en: TQuestion,
  ru: TQuestion,
}

type TAnswersDB = {
  [key: string]: {
      point: number,
      quantityPause: number,
      question: string,
      theme: string,
      userAnswer: string,
  }};

  type TQuestionAndAnswer = {
    descr: string;
    name: string;
    rightAnswer: string;
    theme: string;
    img: string;
    answerOptions: TAnswerOption;
    userAnswer: TUserAnswer;
  }

  type TInfoQuestionsAndAnswers = {
    [key: number]: TQuestionAndAnswer
  };

const UserAnswers: FC = () => {

  type TState = {
    infoQuestionsAndAnswers: null | TInfoQuestionsAndAnswers,
  };

  const [state, setState] = useState<TState>({
    infoQuestionsAndAnswers: null,
  });

  const getNumberFromKey = (key: string): number | undefined => {
    const matches = key.match(/\d+/);
    if (matches !== null) {
      return parseInt(matches[0]);
    }
  };


  const transformUserAnswers = (res: TAnswersDB) => {
    const updateUserAnswers = Object.fromEntries(
      Object.entries(res)
      .map(([key, value]) => [getNumberFromKey(key), {point: value.point, userAnswer: value.userAnswer}])
    );
    return updateUserAnswers;
  };

  const transformData = (res: TAnswerOptionsLangDB | TInfoQuiestionsDB) => {
    const lang: string  = document.querySelector("html")?.getAttribute("lang") || "ru";
    const updateAnswerOptions = Object.fromEntries(
      Object.entries(res)
      .map(([key, value]) => [getNumberFromKey(key), value[lang]])
    );
    return updateAnswerOptions;
  };

  // const setStateAnswerOptions = (transformAnswerOptions: TAnswerOptions) => {
  //   setState((state) => ({...state, answerOptions: transformAnswerOptions}));
  // };

  // const setStateUserAnswers = (transformUserAnswers: TUserAnswers) => {
  //   setState((state) => ({...state, userAnswers: transformUserAnswers}));
  // };

  // const setStateInfoQuestions = (infoQuestions: TInfoQuiestions) => {
  //   setState((state) => ({...state, infoQuestions}));
  // };
  const transformQuestionsAndAnswersDB = (res: (TAnswersDB | TAnswerOptionsLangDB | TInfoQuiestionsDB)[]) => {
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

    setState(state => ({...state, infoQuestionsAndAnswers: generalInfo}))
  };


  useEffect(() => {
    Promise.all([getUserAnswers(), getAnswerOptions(), getInfoQuestions()])
    .then((value) => transformQuestionsAndAnswersDB(value as (TAnswersDB | TAnswerOptionsLangDB | TInfoQuiestionsDB)[]))
    // getUserAnswers().then(transformUserAnswers).then(setStateUserAnswers);
    // getAnswerOptions()
    // .then((value) => transformData(value as TAnswerOptionsDB))
    // .then(setStateAnswerOptions);
    // getInfoQuestions().then((value) => transformData(value as TInfoQuiestionsDB)).then(setStateInfoQuestions)
  }, []);

  return (
    <Container>
      <details open>
        <StyledSum>Ответы</StyledSum>
        <StyledSection>
          <DropDownThemes />
          <DropdownIsRight />
        </StyledSection>

        <StyledUl>
          {Object.entries(userAnswers).map((userAnswerArr, index) => {
            const numbQuiestion = userAnswerArr[0].match(/\d+/);
            const { point, userAnswer, question } = userAnswerArr[1];
            const isRight = point ? true : false;
            const color = isRight ? "green" : "red";
            const className = {
              borderRadius: 10,
              border: `1px solid ${color}`,
            };
            const lang = localStorage.getItem("i18nextLng");

            return (
              <StyledListAnswers style={className} key={index + 1}>
                <StyledUl>
                  <StyledSpanResult isRight={isRight}>
                    {isRight ? "\u2714" : "\u2718"}
                  </StyledSpanResult>
                  <StyledLi>
                    <StyledSpan>{`Вопрос № ${numbQuiestion}: `}</StyledSpan>
                    {question}
                  </StyledLi>
                  <StyledLi>
                    <StyledSpan>Варианты ответов: </StyledSpan>
                    {Object.entries(
                      allAnswers[`answers${numbQuiestion}`][lang || "ru"],
                    )
                      .map((answer) => answer.join(", "))
                      .join(", ")}
                  </StyledLi>
                  <StyledLi>
                    <StyledSpan>Ваш ответ:</StyledSpan> {userAnswer}
                  </StyledLi>
                  {["rightAnswer", "descr"].map((property, index) => {
                    return (
                      <StyledLi key={index + 1}>
                        <StyledSpan>Правильный ответ: </StyledSpan>
                        {
                          allQuiestions[`question${numbQuiestion}`][
                            lang || "ru"
                          ][property]
                        }
                      </StyledLi>
                    );
                  })}
                </StyledUl>
              </StyledListAnswers>
            );
          })}
        </StyledUl>
      </details>
    </Container>
  );
};

export default UserAnswers;
