import React from "react";
import Container from "../../components/Container/Container";

const Contacts = () => {
  return (
    <main style={{ flex: "1 1 auto" }}>
      <Container>
        <h1>Тест для Frontent разработчиков</h1>
        <h2>
          Вы можете связаться с нами, отправив электронное письмо на адрес
          info@iq-global-test.com. Пожалуйста, постарайтесь быть максимально
          ясным и конкретным. Обычно мы отвечаем на электронные письма в течение
          24 часов, но иногда это может занять до 3 рабочих дней.
        </h2>
      </Container>
    </main>
  );
};

export default Contacts;
