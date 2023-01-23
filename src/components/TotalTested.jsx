import React from 'react';
import { getAllTestedUsers, setQuiantiyTestedUsers } from '../index';
import { StyledSpanText, StyledSpanNumber, StyledDivWrapper } from "./styles/TotalTested.styled";
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