import React, { useEffect } from "react";
import "./scrollBar.css";

const ScrollBar = ({ numbQuestion }) => {
  useEffect(() => {
    const widthContainer =
      document.querySelector(".quiz").clientWidth -
      parseInt(getComputedStyle(document.querySelector(".quiz")).paddingRight) -
      parseInt(getComputedStyle(document.querySelector(".quiz")).paddingLeft);
    const totalQuestions = +document.querySelector(".quantity-all")
      .textContent.match(/\d/g)
      .join("");
    let valueWidthScroll = widthContainer / totalQuestions;
    const scrollBar = document.querySelector(".scroll-bar");
    scrollBar.style.width = `${numbQuestion * valueWidthScroll}px`;
  });

  return <div className="scroll-bar"></div>;
};

export default ScrollBar;
