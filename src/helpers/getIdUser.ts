const getIdUser = <T extends string>(key: T): string => {
    const value = localStorage.getItem(key);
    if (value === null || value === undefined) {
      throw new Error(`Value not found for key '${key}'`);
    }
    try {
      return `${value}`;
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Invalid JSON data for key '${key}': ${e.message}`);
      } else {
        throw new Error(`Unknown error caught: ${e}`);
      }
    }
  };
  

export { getIdUser };
