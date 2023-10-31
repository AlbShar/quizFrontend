export const transformSecondsToMinutes = (
  seconds: unknown,
  sec: string,
  min: string,
): string | false | null => {
  let result = '';

  if (typeof seconds === 'number') {
    if (seconds % 60 === 0) {
      result = `${seconds / 60} ${sec}`;
    } else if (seconds < 60) {
      result = `${seconds}  ${sec}`;
    } else if (seconds > 60) {
      const minutes = Math.floor(seconds / 60);
      const leftSeconds = seconds - minutes * 60;
      result = `${minutes}  ${min} ${leftSeconds}  ${sec}`;
    }
    return result;
  } else if (typeof seconds === 'boolean') {
    return false;
  } else {
    return null;
  }
};
