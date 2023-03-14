import { useState, useLayoutEffect } from "react";
import Container from "../../../components/Container/Container";
import Dropdown from "../../../UI/Dropdown/Dropdown";

interface IUserAnswer {
  point: number;
  userAnswer: string;
  question: string;
  theme: string;
}

interface IUserAnswers {
  [key: string]: IUserAnswer;
}

interface IAnswer {
  A: string;
  B: string;
  C: string;
  D: string;
  E: string;
}

interface IAllAnswers {
  [key: string]: {
    [key: string]: IAnswer;
  };
}

interface IQuestion {
  descr: string;
  name: string;
  rightAnswer: string;
  theme: string;
}

interface IAllQuiestions {
  [key: string]: {
    [key: string]: IQuestion;
  };
}

const UserAnswers = () => {
  const [userAnswers, setUserAnswers] = useState<IUserAnswers>({
    answer1: {
      point: 0,
      userAnswer: "E. Все вышеперечисленное",
      question: "В чем заключаются особенности гетерров и сеттеров?",
      theme: "Парадигмы программирования, архитектура",
    },
    answer2: {
      point: 1,
      userAnswer: "E. Все вышеперечисленное",
      question:
        "Выберете верное утверждение про статический метод класса (static)?",
      theme: "Парадигмы программирования, архитектура",
    },
  });

  const [allQuiestions, setAllQuiestions] = useState<IAllQuiestions>({
    question1: {
      deu: {
        descr: "https://html5book.ru/otzyvchivyj-dizayn-saita/",
        name: "Was ist der Unterschied zwischen adaptiven und responsiven Designs?",
        rightAnswer:
          "A. Responsives Design – ein Satz von Dateien (CSS, HTML, JS) für alle Geräte mit einem flexiblen Layoutraster, flexiblen Bildern und Medienabfragen, Responsive Design – ein separater Satz von Dateien für jeden Gerätetyp",
        theme: "Web-Theorie",
      },
      en: {
        descr: "https://html5book.ru/otzyvchivyj-dizayn-saita/",
        name: "What is the difference between adaptive and responsive designs?",
        rightAnswer:
          "A. Responsive design - one set of files (css, html, js) for all devices using a flexible layout grid, flexible images and media queries, responsive design - a separate set of files for each type of device",
        theme: "Web Theory",
      },
      ru: {
        descr: "https://html5book.ru/otzyvchivyj-dizayn-saita/",
        name: "В чем разница между адаптивным (adaptive) и отзывчивым (responsive) дизайнами?",
        rightAnswer:
          "A. Отзывчивый дизайн — один набор файлов (css, html, js) для всех устройств с использованием гибкой сетки макета, гибких изображений и медиазапросов, адаптивный дизайн — для каждого вида устройства отдельный набором файлов",
        theme: "Теория Веба",
      },
    },
    question2: {
      deu: {
        descr: "https://html5book.ru/otzyvchivyj-dizayn-saita/",
        name: "Was ist der Unterschied zwischen adaptiven und responsiven Designs?",
        rightAnswer:
          "A. Responsives Design – ein Satz von Dateien (CSS, HTML, JS) für alle Geräte mit einem flexiblen Layoutraster, flexiblen Bildern und Medienabfragen, Responsive Design – ein separater Satz von Dateien für jeden Gerätetyp",
        theme: "Web-Theorie",
      },
      en: {
        descr: "https://html5book.ru/otzyvchivyj-dizayn-saita/",
        name: "What is the difference between adaptive and responsive designs?",
        rightAnswer:
          "A. Responsive design - one set of files (css, html, js) for all devices using a flexible layout grid, flexible images and media queries, responsive design - a separate set of files for each type of device",
        theme: "Web Theory",
      },
      ru: {
        descr: "https://html5book.ru/otzyvchivyj-dizayn-saita/",
        name: "В чем разница между адаптивным (adaptive) и отзывчивым (responsive) дизайнами?",
        rightAnswer:
          "A. Отзывчивый дизайн — один набор файлов (css, html, js) для всех устройств с использованием гибкой сетки макета, гибких изображений и медиазапросов, адаптивный дизайн — для каждого вида устройства отдельный набором файлов",
        theme: "Теория Веба",
      },
    },
  });

  const [allAnswers, setAllAnswers] = useState<IAllAnswers>({
    answers1: {
      deu: {
        A: "für alle Geräte",
        B: "für alle Geräte",
        C: "für alle Geräte",
        D: "für alle Geräte",
        E: "für alle Geräte",
      },
      en: {
        A: "all devices",
        B: "all devices",
        C: "all devices",
        D: "all devices",
        E: "all devices",
      },
      ru: {
        A: "все девайсы",
        B: "все девайсы",
        C: "все девайсы",
        D: "все девайсы",
        E: "все девайсы",
      },
    },
    answers2: {
      deu: {
        A: "jeden Gerätetyp",
        B: "jeden Gerätetyp",
        C: "jeden Gerätetyp",
        D: "jeden Gerätetyp",
        E: "jeden Gerätetyp",
      },
      en: {
        A: "one layout",
        B: "one layout",
        C: "one layout",
        D: "one layout",
        E: "one layout",
      },
      ru: {
        A: "девайсы",
        B: "девайсы",
        C: "девайсы",
        D: "девайсы",
        E: "девайсы",
      },
    },
  });

  return (
    <Container>
      <details open>
        <Dropdown nameList="filter-theme" style={{ display: "inline" }} />
        <Dropdown nameList="filter-right" style={{ display: "inline" }} />
        <summary>Ответы</summary>
        <ul>
          {Object.entries(userAnswers).map((userAnswerArr) => {
            const numbQuiestion = userAnswerArr[0].match(/\d+/);
            const { point, userAnswer, question, theme } = userAnswerArr[1];
            const isRight = point ? true : false;
            const color = isRight ? "green" : "red";
            const className = { border: `1px solid ${color}` };
            const lang = localStorage.getItem("i18nextLng");

            return (
              <li style={className}>
                <ul>
                  <li>
                    <span>{`Вопрос № ${numbQuiestion}: `}</span>
                    {question}
                  </li>
                  <li>
                    <span>
                      {" "}
                      <span>Варианты ответов:</span>
                      {Object.entries(
                        allAnswers[`answers${numbQuiestion}`][lang || "ru"]
                      )
                        .map((answer) => answer.join(", "))
                        .join(", ")}
                    </span>
                  </li>
                  <li>{`Ваш ответ: ${userAnswer}`}</li>
                  {["rightAnswer", "descr"].map((property) => {
                    return (
                      <li>
                        <span>Правильный ответ: </span>
                        {
                          allQuiestions[`question${numbQuiestion}`][
                            lang || "ru"
                          ][property]
                        }
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </details>
    </Container>
  );
};

export default UserAnswers;
