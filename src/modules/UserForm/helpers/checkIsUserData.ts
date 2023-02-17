const checkIsUserData = () => {
    const userName = document.querySelector<HTMLInputElement>("#username")?.value;
    const userEmail = document.querySelector<HTMLInputElement>("#useremail")?.value;
    const userAge = document.querySelector<HTMLInputElement>("select")?.value;
    const userGender = document.querySelector<HTMLInputElement>("#userman")?.checked
      ? "man"
      : document.querySelector<HTMLInputElement>("#userwoman")?.checked
      ? "woman"
      : null;
    return userName && userEmail && userAge && userGender ? true : false;
  };

export {checkIsUserData};