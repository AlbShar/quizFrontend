import React, { useEffect } from "react";
import "./scrollBar.css";
import { ref } from "firebase/database";
import { onValue } from "firebase/database";
import { db } from "../../index";

const ScrollBar = ({ numbQuestion }) => {
  useEffect(() => {
    let totalQuestions;
    onValue(ref(db, `questions`), (snapshot) => {
      totalQuestions = Object.entries(snapshot.val()).length;
    });

    const widthContainer =
      document.querySelector(".quiz").clientWidth -
      parseInt(getComputedStyle(document.querySelector(".quiz")).paddingRight) -
      parseInt(getComputedStyle(document.querySelector(".quiz")).paddingLeft);
    // const totalQuestions = +document.querySelector(".quantity-all")
    //   .textContent.match(/\d/g)
    //   .join("");
    let valueWidthScroll = widthContainer / totalQuestions;
    const scrollBar = document.querySelector(".scroll-bar");
    scrollBar.style.width = `${numbQuestion * valueWidthScroll}px`;
  });

  return <div className="scroll-bar"></div>;
};

export default ScrollBar;
