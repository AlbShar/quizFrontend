import React, { useEffect } from "react";
import "./quantityQuestions.css";
import { db } from "../../index";
import { ref } from "firebase/database";
import { onValue } from "firebase/database";

const QuantityQuestions = ({ numbQuestion }) => {
  useEffect(() => {
    onValue(ref(db, `questions`), (snapshot) => {
      let totalQuestions = Object.entries(snapshot.val()).length;
      document.querySelector(".quantity-all").textContent = totalQuestions;
    });

    onValue(ref(db, `questions/question${numbQuestion}/theme`), (snapshot) => {
      let themQuestion = snapshot.val();
      document.querySelector(".quantity__theme").textContent = `${themQuestion}`;
    });
  });
  return (
    <h2 className="quantity">
      Вопрос {numbQuestion}
      <span className="quantity-all">0</span>
      <span className="quantity__theme">0</span>
    </h2>
  );
};

export default QuantityQuestions;
