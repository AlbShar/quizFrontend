import React, {useState} from 'react';
import "./quantityQuestions.css";

const QuantityQuestions = ({numbQuestion}) => {
  const quantityQuestions = 40;
    return (
        <h2 className='quantity'>
          Вопрос {numbQuestion}
          <span className='quantity-all'> / {quantityQuestions}</span> 
        </h2>
    );
};

export default QuantityQuestions;