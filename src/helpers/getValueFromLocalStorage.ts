const getValueFromLocalStorage = <T extends string>(key: T) => {
  try {
    const value = localStorage.getItem(key);
    if (!value) {
      return ''
    } else {
      return value;
    }
  } catch (e: unknown) {
    if (e instanceof DOMException && e.code === DOMException.SECURITY_ERR) {
      throw new Error(
        `Don't block your cookies. Turn on it in setting of your browser.`,
      );
    } else if (e instanceof Error) {
      throw new Error(e.message);
    } else {
      throw new Error(`Unknown error caught: ${e}`);
    }
  }
};

export { getValueFromLocalStorage };
