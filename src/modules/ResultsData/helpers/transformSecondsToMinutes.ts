const transformSecondsToMinutes = (seconds: number): string => {
    let result = "";

    if (seconds) {
       if (seconds % 60 === 0) {
        result = `${seconds / 60} мин`;
       } else if (seconds < 60) {
        result = `${seconds} сек`;
       } else if (seconds > 60) {
        const minutes = Math.floor(seconds / 60);
        const leftSeconds = seconds - minutes * 60;
        result = `${minutes} мин ${leftSeconds} сек`;
       }
    }
    return result;
    
};

export {transformSecondsToMinutes};