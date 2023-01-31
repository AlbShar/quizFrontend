const removeAttributesAnswers = (selectorAnswers) => {
    const answersItem = document.querySelectorAll(selectorAnswers);
  
    answersItem.forEach((answerItem) => {
      if (answerItem.dataset.useranswer) {
        answerItem.style = "";
        answerItem.removeAttribute("data-useranswer");
      }
    });
  };

  export {removeAttributesAnswers};