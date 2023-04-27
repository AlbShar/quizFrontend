import { FC, useState, useEffect } from "react";

import Spinner from "../../../../UI/Spinner/Spinner";
import { getUserInfo } from "../../api/getUserInfo";

import { StyledLabel, StyledUserData, StyledArticleName, StyledArticleEmail } from "./UserInfo.Styled";
import { StyledSection } from "./UserInfo.Styled";

type TUserInfoDB = {
  name: string,
  email: string,
  quiantityPause: number,
  time: number
};

const UserInfo: FC = () => {
  type TUserInfo = {
    name: string,
    email: string,
    loading: boolean,
    error: boolean
  };

  const [userInfo, setUserInfo] = useState<TUserInfo>({
    name: "Alex",
    email: "Anton@gmail.com",
    loading: true,
    error: false,
  });

  const view = () => {
    return (
      <StyledSection>
      <StyledArticleName>
        <StyledLabel>Имя</StyledLabel>
        <StyledUserData>{userInfo.name}</StyledUserData>
      </StyledArticleName>
      <StyledArticleEmail>
        <div>
          <StyledLabel as="span">Email</StyledLabel>
          <StyledUserData as="span">{userInfo.email}</StyledUserData>
        </div>
      </StyledArticleEmail>
    </StyledSection>
    )
  };
  const errorMessage = "ERROR!!!";

  const spinner = userInfo.loading ? <Spinner  width={60} height={60} color="#fcfdff" margin="0 auto"/> : false;
  const content = !(userInfo.loading || userInfo.error) ? view() : false;
  const error = userInfo.error ? errorMessage : false;

  const userInfoHasLoaded = (userInfo: TUserInfoDB) => {
    const {name, email} = userInfo;
    setUserInfo(state => ({...state, name, email, loading: false}));
  };

  const onError = (error: any): never => {
    setUserInfo(state => ({...state, loading: false, error: true}));
    throw new Error(error);
  };

  useEffect(() => {
    getUserInfo().then(userInfoHasLoaded).catch(onError);
  }, []);

  return (
    <>
    {spinner}{content} {error}
    </>
  );
};

export default UserInfo;
