import React from 'react';
import "./container.css";

const Container = (props) => {
    return (
        <div className='container'>
            {props.content}
        </div>
    );
};

export default Container;