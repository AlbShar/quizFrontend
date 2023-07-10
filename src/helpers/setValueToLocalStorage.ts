const setValueToLocalStorage = <T extends string>(key: T, value: T): void => {
  try {
    return localStorage.setItem(key, value);
  } catch (e: unknown) {
    if (e instanceof DOMException && e.code === DOMException.SECURITY_ERR) {
      throw new Error(
        `Don't block your cookies. Turn on it in setting of your browser.`,
      );
    }  else {
      throw new Error(`Unknown error caught: ${e}`);
    }
  }
};

export { setValueToLocalStorage };
