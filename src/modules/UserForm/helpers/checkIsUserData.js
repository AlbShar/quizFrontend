const checkIsUserData = () => {
    const userName = document.querySelector("#username").value;
    const userEmail = document.querySelector("#useremail").value;
    const userAge = document.querySelector("select").value;
    const userGender = document.querySelector("#userman").checked
      ? "man"
      : document.querySelector("#userwoman").checked
      ? "woman"
      : null;
    return userName && userEmail && userAge && userGender ? true : false;
  };

export {checkIsUserData};