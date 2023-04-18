
import "./footer.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import Container from "../../../components/Container/Container";
import Logo from "../../../components/Logo/Logo";
import { StyledFlexWrapper } from "../../../styles/FlexWrapper.Styled";

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
  StyledA,
} from "./Footer.Styled";


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
      src: require("../icons/facebook.png"),
      alt: "Открыть сайт в facebook",
      url: "https://ru-ru.facebook.com",
    },
    {
      src: require("../icons/instagram.png"),
      alt: "Открыть сайт в instagram",
      url: "https://www.instagram.com",
    },
    {
      src: require("../icons/twitter.png"),
      alt: "Открыть сайт в twitter",
      url: "https://twitter.com ",
    },
    {
      src: require("../icons/youtube.png"),
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
    { src: require("../icons/visa.png"), alt: "Иконка visa" },
    { src: require("../icons/mastercard.png"), alt: "Иконка mastercard" },
    { src: require("../icons/fondy.png"), alt: "Иконка fondy" },
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
