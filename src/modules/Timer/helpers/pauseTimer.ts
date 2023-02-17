const pauseTimer = (isCounting: boolean, setIsCounting: React.Dispatch<React.SetStateAction<boolean>>) => {
    setIsCounting(!isCounting);
  };

  export default pauseTimer;