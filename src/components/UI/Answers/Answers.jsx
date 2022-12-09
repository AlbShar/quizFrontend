import React, { useEffect, useState } from "react";
import "./answers.css";
import { db } from "../../../index";
import { ref } from "firebase/database";
import { onValue } from "firebase/database";

const Answers = ({ currentQuestionNumb }) => {
  const reference = ref(db, `answers/answer${currentQuestionNumb}`);
  const [answers, setAnswers] = useState([]);
  useEffect(() => {
    onValue(reference, (snapshot) => {
      const answersDB = Object.entries(snapshot.val());
      setAnswers(answersDB.map((item) => item.join(". ")));
    });
    document
      .querySelectorAll(".list-answers__item")
      .forEach((item) => item.classList.remove("list-answers__item-active"));
  }, [currentQuestionNumb]);

  return (
    <article className="answers">
      <ul className="list-answers">
        {answers.map((answer, index) => {
          return (
            <li
              key={index + 1}
              className="list-answers__item"
              onClick={(e) => {
                document
                  .querySelectorAll(".list-answers__item")
                  .forEach((item) =>
                    item.classList.remove("list-answers__item-active")
                  );
                e.target.classList.add("list-answers__item-active");
              }}
            >
              {answer}
            </li>
          );
        })}
      </ul>
    </article>
  );
};

export default Answers;
