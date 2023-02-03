import React from "react";
import Container from "../../../components/Container/Container";
import Logo from "../../../components/Logo/Logo";
import "./footer.css";
import facebook from "../icons/facebook.png";
import instagram from "../icons/instagram.png";
import twitter from "../icons/twitter.png";
import youtube from "../icons/youtube.png";
import mastercard from "../icons/mastercard.png";
import fondy from "../icons/fondy.png";
import visa from "../icons/visa.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  StyledFooter,
  StyledImgNetworks,
  StyledImgPayment,
  StyledSectionNetworks,
  StyledSectionPayment,
  StyledUlNetworks,
  StyledLiNetworks,
  StyledSection,
  StyledLi,
  StyledUl,
  StyledA
} from "./Footer.Styled";
import { StyledFlexWrapper } from "../../../styles/FlexWrapper.Styled";

const Footer = () => {
  const { t } = useTranslation();

  const iconsNetworks = [
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

  const iconsPayments = [
    { src: visa, alt: "Иконка visa" },
    { src: mastercard, alt: "Иконка mastercard" },
    { src: fondy, alt: "Иконка fondy" },
  ];

  return (
    <StyledFooter>
      <Container>
        <StyledFlexWrapper widthFlexStart="767.8" gap='15'>
          <Logo location="footer" />
          <StyledSectionNetworks>
            <nav >
              <StyledUlNetworks>
                {iconsNetworks.map((icon, index) => {
                  return (
                    <StyledLiNetworks key={index + 1}>
                      <StyledA href={icon.url} >
                        <StyledImgNetworks src={icon.src} alt={icon.alt} />
                      </StyledA>
                    </StyledLiNetworks>
                  );
                })}
              </StyledUlNetworks>
            </nav>
          </StyledSectionNetworks>
          <StyledSection>
            <nav>
              <StyledUl>
                {infoMiddleFooter.map((item, index) => {
                  return (
                    <StyledLi key={index + 1}>
                      <Link className="footer__list-link" to={item.link}>
                        {item.text}
                      </Link>
                    </StyledLi>
                  );
                })}
              </StyledUl>
            </nav>
          </StyledSection>
          <StyledSectionPayment>
            {iconsPayments.map((icon, index) => {
              return (
                <StyledImgPayment
                  src={icon.src}
                  alt={icon.alt}
                  key={index + 1}
                />
              );
            })}
          </StyledSectionPayment>
        </StyledFlexWrapper>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
