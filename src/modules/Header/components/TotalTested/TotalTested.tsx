import {FC, useRef} from 'react';
import { setQuiantiyTestedUsers } from '../../helpers/setQuiantiyTestedUsers';
import { StyledSpanText, StyledSpanNumber, StyledDivWrapper } from "./TotalTested.styled";
import { useEffect } from 'react';
import { useTranslation } from "react-i18next";


const TotalTested: FC = () => {
    const { t } = useTranslation( );
    const totalUsersRef = useRef<HTMLSpanElement>(null);

    useEffect( () => {
        setQuiantiyTestedUsers(totalUsersRef);
      }, []);

    return (
        <StyledDivWrapper>
            <StyledSpanText>{t("Протестировано")}</StyledSpanText>
            <StyledSpanNumber ref={totalUsersRef}>0</StyledSpanNumber>
        </StyledDivWrapper>
    );
};

export default TotalTested;