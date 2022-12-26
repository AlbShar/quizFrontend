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
import { FooterStyled } from "../styles/Footer.Styled";
import { NavStyled } from "../styles/Nav.styled";
import { List } from "../styles/List.styled";
import { ListItem, ListItemFooter } from "../styles/ListItem.styled";
import {SectionNetworksStyled, SectionItems, SectionPaymentStyled} from "../styles/Section.styled";
import { ListFooter } from "../styles/List.styled";
import { LinkStyled } from "../styles/Link.styled";
import { IconFooterPaymentStyled, IconFooterNetworkStyled } from "../styles/Img.Styled";

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
    <FooterStyled>
      <Container flex={true} widthFlexStart="767.8">
        <Logo location="footer" />
        <SectionNetworksStyled>
          <NavStyled>
            <List>
              {iconsNetworks.map((icon, index) => {
                return (
                  <ListItem>
                    <LinkStyled
                      href={icon.url}
                      key={index + 1}
                    >
                      <IconFooterNetworkStyled
                        src={icon.src}
                        alt={icon.alt}
                      />
                    </LinkStyled>
                  </ListItem>
                );
              })}
            </List>
          </NavStyled>
        </SectionNetworksStyled>
        <SectionItems>
          <NavStyled>
            <ListFooter>
              {infoMiddleFooter.map((item, index) => {
                return (
                    <ListItemFooter key={index + 1}>
                      <Link className="footer__list-link" to={item.link}>
                        {item.text}
                      </Link>
                    </ListItemFooter>
                );
              })}
            </ListFooter>
          </NavStyled>
        </SectionItems>
        <SectionPaymentStyled>
          {iconsPayments.map((icon, index) => {
            return (
              <IconFooterPaymentStyled
                src={icon.src}
                alt={icon.alt}
                key={index + 1}
              />
            );
          })}
        </SectionPaymentStyled>
      </Container>
    </FooterStyled>
  );
};

export default Footer;
