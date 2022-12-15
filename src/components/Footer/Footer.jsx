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
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();

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
    { text: t("Сообщить"), link: "/reportbug" },
    { text: t("Восстановить"), link: "/reestablish" },
    { text: t("Политика"), link: "/politics" },
  ];

  const iconsBottomFooter = [
    { src: visa, alt: "Иконка visa" },
    { src: mastercard, alt: "Иконка mastercard" },
    { src: fondy, alt: "Иконка fondy" },
  ];

  return (
    <footer className="footer">
      <Container>
        <section className="wrapper">
        <section className="footer__top">
          <Logo className="footer__logo" />
        </section>
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
        <section className="footer__middle">
          <nav>
            <ul className="footer__list">
              {infoMiddleFooter.map((item, index) => {
                return (
                  <>
                    <li key={index + 1} className="footer__list-item">
                      <Link className="footer__list-item" to={item.link}>{item.text}</Link>
                    </li>
                  </>
                );
              })}
            </ul>
          </nav>
        </section>
        <section className="footer__bottom">
          {iconsBottomFooter.map((icon, index) => {
            return (
              <img
                className="footer__payment-img"
                src={icon.src}
                alt={icon.alt}
                key={index + 1}
              />
            );
          })}
        </section>
        </section>

      </Container>
    </footer>
  );
};

export default Footer;
