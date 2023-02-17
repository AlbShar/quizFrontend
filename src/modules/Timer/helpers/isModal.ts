const isModal = (selectorModal: string) => {
  const elementModal = document.querySelector<HTMLElement>(selectorModal);
  if (elementModal) {
    return getComputedStyle(elementModal).display === "block";
  } 
};

export default isModal;