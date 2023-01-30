import React from 'react';
import { setQuiantiyTestedUsers } from '../../helpers/setQuiantiyTestedUsers';
import { StyledSpanText, StyledSpanNumber, StyledDivWrapper } from "./TotalTested.styled";
import { useEffect } from 'react';
import { useTranslation } from "react-i18next";


const TotalTested = () => {
    const { t } = useTranslation( );

    useEffect( () => {
        setQuiantiyTestedUsers("#totalUsers");
      }, []);

    return (
        <StyledDivWrapper>
            <StyledSpanText>{t("Протестировано")}</StyledSpanText>
            <StyledSpanNumber id="totalUsers">0</StyledSpanNumber>
        </StyledDivWrapper>
    );
};

export default TotalTested;