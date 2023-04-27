const checkIsUserData = (userName: string, userEmail: string): boolean => {
    return userName && userEmail ? true : false;
  };

export {checkIsUserData};