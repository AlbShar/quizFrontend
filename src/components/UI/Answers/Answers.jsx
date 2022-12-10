import React, { useEffect, useState } from "react";
import "./answers.css";
import { db } from "../../../index";
import { ref } from "firebase/database";
import { onValue } from "firebase/database";

const Answers = ({ currentQuestionNumb }) => {
  const [answers, setAnswers] = useState([]);
  
  useEffect(() => {
    document.querySelectorAll('.list-answers__item').forEach(answerItem => {
      answerItem.classList.remove("list-answers__item-active");
    })
    onValue(ref(db, `answers/answer${currentQuestionNumb}`), (snapshot) => {
      const answersDB = Object.entries(snapshot.val());
      setAnswers(answersDB.map((item) => item.join(". ")));
      
    });
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
