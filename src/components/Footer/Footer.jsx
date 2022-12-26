import React from "react";
import Container from "../Container";
import Logo from "../Logo";
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
import { StyledFlexWrapper } from "../styles/FlexWrapper.Styled";

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
        <StyledFlexWrapper widthFlexStart="767.8">
          <Logo location="footer" />
          <StyledSectionNetworks>
            <nav>
              <StyledUlNetworks>
                {iconsNetworks.map((icon, index) => {
                  return (
                    <StyledLiNetworks>
                      <StyledA href={icon.url} key={index + 1}>
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
