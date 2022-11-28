import React from 'react';
import "./callToAction.css";
import InfoTest from './InfoTest/InfoTest';
import { useTranslation } from "react-i18next";
import Button from '../UI/Button/Button';

const CallToAction = () => {
    const { t } = useTranslation();
    return (
        <div className='frontend-test'>
            <h1 className='frontend-test__title'>{t("Тест_для_Frontend_разработчиков")}</h1>
            <InfoTest/>
            <p className='frontend-test__subtitle'>{t("Добро_пожаловать")}</p>
            <p className='frontend-test__subtitle'>{t("Тест_будет")}</p>
            <Button value={t("Начать_тест")}/>
        </div>
    );
};

export default CallToAction;

// https://codesandbox.io/s/zw8kylol8m?file=/src/index.tsx:561-578