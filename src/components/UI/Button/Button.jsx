import React from 'react';
import "./button.css";
import { Link } from "react-router-dom";


const Button = (props) => {
    return (
        <button className='btn'>
            <Link className="btn__link" to="quiz">{props.value}</Link>
        </button>
    );
};

export default Button;