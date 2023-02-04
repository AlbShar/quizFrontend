const setAttributesUserAnswer = (
    e,
    selectorAnswers,
    cssBorder,
    nameDataAtrr
  ) => {
    document.querySelectorAll(selectorAnswers).forEach((item) => {
      item.style = "";
      item.removeAttribute(nameDataAtrr);
    });
    e.target.style.border = cssBorder;
    e.target.setAttribute(nameDataAtrr, true);
  };

  export {setAttributesUserAnswer};