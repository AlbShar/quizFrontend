const getValueFromLocalStorage = <T extends string>(key: T): T => {
  try {
    const value = localStorage.getItem(key);
    if (value === null || value === undefined) {
      throw new Error(`Value not found for key in LocalSto '${key}'`);
    }
    return value as T;
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
