import React, { useState } from 'react';
import "./callToAction.css";
import InfoTest from './InfoTest/InfoTest';
import Button from '../UI/Button/Button';
const CallToAction = () => {
    return (
        <div className='frontend-test'>
            <h1 className='frontend-test__title'>Тест для Frontend разработчиков</h1>
            <InfoTest/>
            <p className='frontend-test__subtitle'>Добро пожаловать на сайт по проверке знаний Frontend разработчиков. Просим Вас перед началом теста убедиться, что Вас ничего не отвлекает.</p>
            <p className='frontend-test__subtitle'>Тест будет состоять из 40 вопросов. На его прохождение у Вас будет 60 минут. После его прохождения вы получите результаты тестирования и советы по тому, какие темы Вам нужно подтянуть в сфере Frontend разработки.</p>
            <Button value={'Начать тест'}/>
        </div>
    );
};

export default CallToAction;

// https://codesandbox.io/s/zw8kylol8m?file=/src/index.tsx:561-578