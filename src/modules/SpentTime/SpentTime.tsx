import { FC, useEffect, useState } from "react";

import {
  StyledH2,
  StyledH3,
  StyledArticle,
} from "../SpentTime/SpentTime.Styled";
import Spinner from "../../UI/Spinner/Spinner";
import { getUserInfo } from "./api/getUserInfo";
import { transformSecondsToMinutes } from "./helpers/transformSecondsToMinutes";

const SpentTime: FC = () => {
  type TState = {
    loading: boolean;
    error: boolean;
    time: number | false | null;
  };

  type TUserInfoDB = {
    name: string,
    email: string,
    quiantityPause: number,
    time: number,
  };

  const [state, setState] = useState<TState>({
    loading: true,
    error: false,
    time: 0,
  });

  const timeHasLoaded = (userInfo: TUserInfoDB) => {
    const {time} = userInfo;
    setState((state) => ({...state, loading: false, time}));
  };

  const view = () => {
    return (
      <StyledArticle>
        <StyledH3>Затраченное время</StyledH3>
        <StyledH2>{transformSecondsToMinutes(state.time)}</StyledH2>
      </StyledArticle>
    );
  };
  const spinner = state.loading ? (
    <Spinner width={50} height={50} color={"#1f2ce0"} margin="0 auto" />
  ) : (
    false
  );
  const errorMessage = "ERROR!";
  const error = state.error ? errorMessage : false;
  const content = !(state.loading || state.error) ? view() : false;

  const onError = (error: any): never => {
    setState((state) => ({...state, loading: false, error: true}));
    throw new Error(error);
};

  useEffect(() => {
    getUserInfo().then(timeHasLoaded).catch(onError);
  }, []);

  return (
    <>
      {spinner} {error} {content}
    </>
  );
};

export default SpentTime;
