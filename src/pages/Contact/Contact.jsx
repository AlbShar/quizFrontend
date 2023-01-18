import React from "react";
import Container from "../../components/Container";
import { GlobalStyles } from "../../components/styles/Global";
import Button from "../../components/UI/Button/Button";
import { StyledMain } from "../Main.Styled";

const Contact = () => {
  return (
    <>
      <GlobalStyles />
      <StyledMain>
        <Container>
          <section style={{ backgroundColor: "white" }}>
            <article>
              <h1>Contact</h1>
              <p>
                Мы уже учли ваши ответы и затраченное время, осталось заполнить
                небольшую форму. Ваши данные абсолютно конфиденциальны и
                используются нашим алгоритмом только для максимально объективной
                валидации результата и глобальной статистики.
              </p>
            </article>
            <article>
              <form>
                <fieldset>
                  <p>
                    <label htmlFor="username">Your name</label>
                    <input type="text" id="username" name="username" />
                  </p>
                  <p>
                    <label htmlFor="username">E-mail</label>
                    <input type="email" id="useremail" name="useremail" />
                  </p>
                  <p>
                    <label htmlFor="username">Age</label>
                    <select>
                      <option> меньше 18 </option>
                      <option>19-25</option>
                      <option>26-35</option>
                      <option>36-50</option>
                      <option>50+</option>
                    </select>
                  </p>
                </fieldset>
                <fieldset>
                  <div>
                    <label>Gender</label>
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        id="userman"
                        value="man"
                      ></input>
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        id="userwoman"
                        value="woman"
                      ></input>
                    </label>
                  </div>
                </fieldset>
                <Button currentPage="Homepage"/>
              </form>
            </article>
          </section>
        </Container>
      </StyledMain>
    </>
  );
};

export default Contact;
