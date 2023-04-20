const checkIsUserData = () => {
    const userName = document.querySelector<HTMLInputElement>("#username")?.value;
    const userEmail = document.querySelector<HTMLInputElement>("#useremail")?.value;
    return userName && userEmail ? true : false;
  };

export {checkIsUserData};