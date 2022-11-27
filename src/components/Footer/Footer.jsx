import React from "react";
import Container from "../Container/Container";
import Logo from "../UI/Logo/Logo";
import "./footer.css";
import facebook from "../../images/icons/facebook.png";
import instagram from "../../images/icons/instagram.png";
import twitter from "../../images/icons/twitter.png";
import youtube from "../../images/icons/youtube.png";
import mastercard from "../../images/icons/mastercard.png";
import fondy from "../../images/icons/fondy.png";
import visa from "../../images/icons/visa.png";

const Footer = () => {
  const iconsTopFooter = [
    {
      src: facebook,
      alt: "Открыть сайт в facebook",
      url: "https://ru-ru.facebook.com",
    },
    {
      src: instagram,
      alt: "Открыть сайт в instagram",
      url: "https://www.instagram.com",
    },
    {
      src: twitter,
      alt: "Открыть сайт в twitter",
      url: "https://twitter.com ",
    },
    {
      src: youtube,
      alt: "Открыть сайт в youtube",
      url: "https://www.youtube.com/",
    },
  ];

  const infoMiddleFooter = [
    "О нас",
    "Восстаовить мой результат",
    "Политика конфиденциальности",
  ];

  const iconsBottomFooter = [
    { src: visa, alt: "Иконка visa" },
    { src: mastercard, alt: "Иконка mastercard" },
    { src: fondy, alt: "Иконка fondy" },
  ];

  return (
    <footer className="footer">
      <Container>
        <section className="footer__top">
          <Logo className="footer__logo" />
          <article className="footer__networks">
            {iconsTopFooter.map((icon, index) => {
              return (
                <a
                  className="footer__network-link"
                  href={icon.url}
                  key={index + 1}
                >
                  <img
                    className="footer__network-img"
                    src={icon.src}
                    alt={icon.alt}
                  />
                </a>
              );
            })}
          </article>
        </section>
        <section className="footer__middle">
          <ul className="footer__list">
            {infoMiddleFooter.map((item, index) => {
              return (
                <li key={index + 1} className="footer__list-item">
                  {item}
                </li>
              );
            })}
          </ul>
        </section>
        <section className="footer__bottom">
        {iconsBottomFooter.map((icon, index) => {
              return (
                  <img
                    className="footer__network-img"
                    src={icon.src}
                    alt={icon.alt}
                    key={index + 1}
                  />
              );
            })}
        </section>
      </Container>
    </footer>
  );
};

export default Footer;
