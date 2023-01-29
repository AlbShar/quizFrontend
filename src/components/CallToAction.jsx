import React from 'react';
import InfoTest from './InfoTest';
import { useTranslation } from "react-i18next";
import Button from './UI/Button/Button';
import LinkBtn from '../UI/LinkBtn/LinkBtn';
import { StyledCallToAction, StyledH1, StyledP } from './styles/CallToAction.styled';


const CallToAction = () => {
    const { t } = useTranslation();
    return (
        <StyledCallToAction id="CallToAction">
            <StyledH1>{t("Тест_для_Frontend_разработчиков")}</StyledH1>
            <InfoTest/>
            <StyledP>{t("Добро_пожаловать")}</StyledP>
            <StyledP>{t("Тест_будет")}</StyledP>
            <LinkBtn pageTo="quiz" someAction={() => console.log('link')}>Начать тест</LinkBtn>
        </StyledCallToAction>
    );
};

export default CallToAction;

