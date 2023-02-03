const clearAnimateInputAndText = (e, colorInitial) => {
    e.target.style.borderColor = colorInitial;
    e.target.previousElementSibling.style.color = colorInitial;
  };

  export {clearAnimateInputAndText};