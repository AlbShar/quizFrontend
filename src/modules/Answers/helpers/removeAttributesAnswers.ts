const removeAttributesAnswers = (selectorAnswers: string) => {
    const answersItem = document.querySelectorAll<HTMLElement>(selectorAnswers);
  
    answersItem.forEach((answerItem: HTMLElement) => {
      if (answerItem.dataset.useranswer) {
        answerItem.style.cssText = "";
        answerItem.removeAttribute("data-useranswer");
      }
    });
  };

  export {removeAttributesAnswers};