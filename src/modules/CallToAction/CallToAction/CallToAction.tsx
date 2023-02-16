import React from 'react';
import InfoTest from '../components/InfoTest/InfoTest';
import { useTranslation } from "react-i18next";
import LinkBtn from '../../../UI/LinkBtn/LinkBtn';
import { createIdUser } from '../helpers/createIdUser';
import { StyledCallToAction, StyledH1, StyledP } from './CallToAction.styled';

// eslint-disable-next-line
export const CallToAction = () => {
    const { t } = useTranslation();
    return (
        <StyledCallToAction id="CallToAction">
            <StyledH1>{t("Тест_для_Frontend_разработчиков")}</StyledH1>
            <InfoTest/>
            <StyledP>{t("Добро_пожаловать")}</StyledP>
            <StyledP>{t("Тест_будет")}</StyledP>
            <LinkBtn pageTo="quiz" onClick={createIdUser} text="Начать тест"></LinkBtn>
        </StyledCallToAction>
    );
};


