import React, {useEffect} from "react";
import "./showNotification.css";

const ShowNotification = () => {
  useEffect(() => {
    localStorage.setItem('penalty-points', '3')
  })
  return (
    <div className="notification-wrapper">
      <div className="notification">
        <h1 className="notification__title">К сожалению, Ваше время вышло! 😔</h1>
        <span className="notification__close" onClick={() => {
            document.querySelector(".notification-wrapper").style.display = 'none';
        }}>✖</span>
        <span className="notification__text">Продолжайте решать тест дальше. В связи с тем, что время закончилось из Вашего результата вычтется 3 балла.</span>
      </div>
    </div>
  );
};

export default ShowNotification;
