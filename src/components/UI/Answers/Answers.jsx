import React, { useEffect } from "react";
import "./answers.css";
import { db } from "../../../index";
import { ref } from "firebase/database";
import { onValue } from "firebase/database";

const Answers = ({ numbQuestion }) => {
  let answersItems = ["A.", "B.", "C.", "D.", "E."];
  const reference = ref(db, `answers/answer${numbQuestion}`);

  useEffect(() => {
    onValue(reference, (snapshot) => {
      const answersDb = snapshot.val();
      const answersValues = Object.values(answersDb);
      const listItems = document.querySelectorAll(".list-answers__item");
         listItems.forEach((item, index) => {
           item.textContent = answersItems[index] + ' ' + answersValues[index];
           item.classList.remove('list-answers__item-active');
         });
   });
  });

  return (
    <article className="answers">
      <ul className="list-answers">
        {answersItems.map((answer, index) => {
          return (
            <li
              key={index + 1}
              className="list-answers__item"
              onClick={(e) => {
                document
                  .querySelectorAll(".list-answers__item")
                  .forEach(item => (item.classList.remove('list-answers__item-active')));
                e.target.classList.add('list-answers__item-active');
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
