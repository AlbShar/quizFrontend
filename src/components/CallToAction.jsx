import React from 'react';
import InfoTest from './InfoTest';
import { useTranslation } from "react-i18next";
import Button from './UI/Button/Button';
import { Title } from './styles/Title.styled';
import { CallToActionStyled } from './styles/CallToAction.styled';
import { TextWhite } from './styles/Text.styled';


const CallToAction = () => {
    const { t } = useTranslation();
    return (
        <CallToActionStyled id="CallToAction">
            <Title page='home'>{t("Тест_для_Frontend_разработчиков")}</Title>
            <InfoTest/>
            <TextWhite>{t("Добро_пожаловать")}</TextWhite>
            <TextWhite>{t("Тест_будет")}</TextWhite>
            <Button currentPage="Homepage"/>             
        </CallToActionStyled>
    );
};

export default CallToAction;

