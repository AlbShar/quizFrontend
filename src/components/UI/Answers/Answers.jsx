import React from "react";
import "./answers.css";
import codeJS from "../../../images/codeJS.png";

const Answers = () => {
  const answersItems = ['A.', 'B.', 'C.', 'D.', 'E.'];
  return (
    <article className="answers">
      <div className="wrapper-img">
        <img src={codeJS} alt="Код на JS" className="img"/>
      </div>
      <ul className="list-answers">
        {answersItems.map((answer, index) => {
          return (
            <li key={index + 1} className="list-answers__item" onClick={(e) => {
              document.querySelectorAll('.list-answers__item').forEach(item => item.style.border = '1px solid #DFE4E9')
              e.target.style.border = "2px solid #6768D7"
            }}>{answer}</li>
          )
        })}
      </ul>
    </article>
  );
};

export default Answers;
