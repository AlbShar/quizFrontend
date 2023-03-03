import React from "react";
import Container from "../../../components/Container/Container";
import Logo from "../../../components/Logo/Logo";
import "./footer.css";
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
const facebook = require("../icons/facebook.png");
const twitter = require("../icons/twitter.png");
const youtube = require("../icons/youtube.png");
const mastercard = require("../icons/mastercard.png");
const fondy = require("../icons/fondy.png");
const visa = require("../icons/visa.png");
const instagram = require("../icons/instagram.png");

const Footer = () => {
 
  interface IconNetwork {
    src: string;
    alt: string;
    url: string;
  }
  interface InfoFooter {
    text: string;
    link: "/reportbug" | "/reestablish" | "/politics";
  }
  interface IconPayment {
    src: string;
    alt: string;
  }
  const { t } = useTranslation();

  const iconsNetworks: IconNetwork[] = [
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

  const infoMiddleFooter: InfoFooter[]= [
    { text: t("Сообщить"), link: "/reportbug" },
    { text: t("Восстановить"), link: "/reestablish" },
    { text: t("Политика"), link: "/politics" },
  ];

  const iconsPayments: IconPayment[] = [
    { src: visa, alt: "Иконка visa" },
    { src: mastercard, alt: "Иконка mastercard" },
    { src: fondy, alt: "Иконка fondy" },
  ];

  const elementsIconsNetworks = iconsNetworks.map((icon, index) => {
    return (
      <StyledLiNetworks key={index + 1}>
        <StyledA href={icon.url} >
          <StyledImgNetworks src={icon.src} alt={icon.alt} />
        </StyledA>
      </StyledLiNetworks>
    );
  });

  const elementsInfoMiddleFooter = infoMiddleFooter.map((item, index) => {
    return (
      <StyledLi key={index + 1}>
        <Link className="footer__list-link" to={item.link}>
          {item.text}
        </Link>
      </StyledLi>
    );
  });

  const elementsIconsPayments = iconsPayments.map((icon, index) => {
    return (
      <StyledImgPayment
        src={icon.src}
        alt={icon.alt}
        key={index + 1}
      />
    );
  });

  return (
    <StyledFooter>
      <Container>
        <StyledFlexWrapper widthFlexStart={767.8} gap={15}>
          <Logo location="footer" />
          <StyledSectionNetworks>
            <nav >
              <StyledUlNetworks>
                {elementsIconsNetworks}
              </StyledUlNetworks>
            </nav>
          </StyledSectionNetworks>
          <StyledSection>
            <nav>
              <StyledUl>
                {elementsInfoMiddleFooter}
              </StyledUl>
            </nav>
          </StyledSection>
          <StyledSectionPayment>
            {elementsIconsPayments}
          </StyledSectionPayment>
        </StyledFlexWrapper>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
