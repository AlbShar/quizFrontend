let timeEndQuiz: number = 0;

export function setTimeToPassQuiz(timeLeft: number) {
    timeEndQuiz = timeLeft;
    console.log(timeEndQuiz);
}

export { timeEndQuiz };