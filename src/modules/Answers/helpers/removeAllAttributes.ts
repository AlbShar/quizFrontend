const removeAllAttributes = (refs: HTMLLIElement[]) => {
  refs.forEach((answer: HTMLLIElement) => {
    answer.removeAttribute('style');
    answer.removeAttribute('data-useranswer');
  });
};

export { removeAllAttributes };
