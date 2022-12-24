import React from 'react';
import InfoTest from '../InfoTest/InfoTest';
import { useTranslation } from "react-i18next";
import Button from '../UI/Button/Button';
import { Title } from '../styles/Title.styled';
import { CallToActionStyled } from '../styles/CallToAction.styled';
import { Text } from '../styles/Text.styled';


const CallToAction = () => {
    const { t } = useTranslation();
    return (
        <CallToActionStyled>
            <Title homepage>{t("Тест_для_Frontend_разработчиков")}</Title>
            <InfoTest/>
            <Text>{t("Добро_пожаловать")}</Text>
            <Text>{t("Тест_будет")}</Text>
            <Button currentPage="Homepage"/>             
        </CallToActionStyled>
    );
};

export default CallToAction;

// https://codesandbox.io/s/zw8kylol8m?file=/src/index.tsx:561-578