const isModal = (selectorModal) => {
  return document.querySelector(selectorModal)
  ? getComputedStyle(document.querySelector(selectorModal)).display ===
    "block" : false;
};

export default isModal;