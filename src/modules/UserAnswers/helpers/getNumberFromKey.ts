const getNumberFromKey = (key: string): number | undefined => {
  const matches = key.match(/\d+/);
  if (matches !== null) {
    return parseInt(matches[0]);
  }
};

export { getNumberFromKey };
