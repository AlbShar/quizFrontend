import React, {useEffect} from 'react';
import "./quantityQuestions.css";
import { db } from "../../index";
import { ref } from "firebase/database";
import { onValue } from "firebase/database";


const QuantityQuestions = ({numbQuestion}) => {
  const reference = ref(db, `questions`);
  let totalQuestions;
  onValue(reference, (snapshot) => {
     totalQuestions = Object.entries(snapshot.val()).length ;
  });


  useEffect(() => {
    document.querySelector('.quantity-all').textContent = totalQuestions;
  });
    return (
        <h2 className='quantity'>
          Вопрос {numbQuestion}
          <span className='quantity-all'>0</span> 
        </h2>
    );
};

export default QuantityQuestions;