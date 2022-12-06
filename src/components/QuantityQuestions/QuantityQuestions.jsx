import React, {useEffect} from 'react';
import "./quantityQuestions.css";
import { db } from "../../index";
import { ref } from "firebase/database";
import { onValue } from "firebase/database";


const QuantityQuestions = ({numbQuestion}) => {
  let totalQuestions;
  let themQuestion;
  onValue(ref(db, `questions`), (snapshot) => {
     totalQuestions = Object.entries(snapshot.val()).length ;
  });

  onValue(ref(db, `questions/question${numbQuestion}/theme`), (snapshot) => {
    themQuestion = snapshot.val() ;
 });


  useEffect(() => {
    document.querySelector('.quantity-all').textContent = totalQuestions;
    document.querySelector('.quantity__theme').textContent = `${themQuestion}`;
  });
    return (
        <h2 className='quantity'>
          Вопрос {numbQuestion}
          <span className='quantity-all'>0</span> 
          <span className='quantity__theme'>0</span> 
        </h2>
    );
};

export default QuantityQuestions;