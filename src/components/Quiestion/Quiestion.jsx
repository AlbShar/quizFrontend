import React, { useEffect } from "react";
import "./question.css";
import { db } from "../../index";
import { ref } from "firebase/database";
import { onValue } from "firebase/database";

const Quiestion = ({ numbQuestion }) => {
  const reference = ref(db, `questions/question${numbQuestion}`);
  let isImg;
  let titleQuestion;
  onValue(reference, (snapshot) => {
    const db = snapshot.val();
    titleQuestion = db.name;
    isImg = db.isImg;
  });

  useEffect(() => {
      document.querySelector(".question__title").textContent = titleQuestion;
  });

  return (
    <article className="question">
      <h2 className="question__title"></h2>
      {isImg && (
        <div className="wrapper-img">
          <img src={isImg} alt="Код на JS" className="img" />
        </div>
      )}
    </article>
  );
};

export default Quiestion;
