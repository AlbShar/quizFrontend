import { FC, useRef, useState } from "react";
import {
  StyledSpanText,
  StyledSpanNumber,
  StyledDivWrapper,
} from "./TotalTested.styled";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Spinner from "../../../../UI/Spinner/Spinner";
import { getAllTestedUsers } from "../../api/getAllTestedUsers";

const TotalTested: FC = () => {
  const { t } = useTranslation();
  const totalUsersRef = useRef<HTMLSpanElement>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [allTestedUsers, SetAllTestedUsers] = useState<number>(0);
  const loadingIsOver = () => {
    setLoading(false)
  };

  const setTestedUsers = (num: number) => {
    SetAllTestedUsers(num)
  };

  useEffect(() => {
    getAllTestedUsers().then((allTestedUsers) => {
        loadingIsOver();
        setTestedUsers(allTestedUsers)
    });
  }, [loading]);

  if (loading) {
    return <Spinner width='50' height='50'/>;
  }

  return (
    <StyledDivWrapper>
      <StyledSpanText>{t("Протестировано")}</StyledSpanText>
      <StyledSpanNumber ref={totalUsersRef}>{allTestedUsers}</StyledSpanNumber>
    </StyledDivWrapper>
  );
};

export default TotalTested;
