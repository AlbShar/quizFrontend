import React from 'react';
import "./callToAction.css";
import InfoTest from './InfoTest/InfoTest';
import { useTranslation } from "react-i18next";
import Button from '../UI/Button/Button';
import { Title } from '../styles/Title.styled';


const CallToAction = () => {
    const { t } = useTranslation();
    return (
        <div className='frontend-test'>
            <Title homepage>{t("Тест_для_Frontend_разработчиков")}</Title>
            <InfoTest/>
            <p className='frontend-test__subtitle'>{t("Добро_пожаловать")}</p>
            <p className='frontend-test__subtitle'>{t("Тест_будет")}</p>
            <Button currentPage="Homepage"/>             
        </div>
    );
};

export default CallToAction;

// https://codesandbox.io/s/zw8kylol8m?file=/src/index.tsx:561-578