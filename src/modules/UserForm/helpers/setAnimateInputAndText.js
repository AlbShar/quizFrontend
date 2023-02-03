const setAnimateInputAndText = (e, colorFocus) => {
    e.target.style.transition = "all ease 0.3s";
    e.target.style.borderColor = colorFocus;
    e.target.previousElementSibling.style.color = colorFocus;
  };

  export {setAnimateInputAndText};