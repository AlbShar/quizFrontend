import React from 'react';
import "./callToAction.css";
import InfoTest from './InfoTest/InfoTest';
import Button from '../../UI/Button/Button';

const CallToAction = (props) => {
    return (
        <div className='frontend-test'>
            <h1 className='frontend-test__title'>{props.props.title}</h1>
            <InfoTest time={props.props.time} dif={props.props.dif} question={props.props.question}/>
            <p className='frontend-test__subtitle'>{props.props.subtitle1}</p>
            <p className='frontend-test__subtitle'>{props.props.subtitle2}</p>
            <Button value={props.props.start}/>
        </div>
    );
};

export default CallToAction;

// https://codesandbox.io/s/zw8kylol8m?file=/src/index.tsx:561-578