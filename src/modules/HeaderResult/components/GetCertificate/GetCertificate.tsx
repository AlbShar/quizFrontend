import { useEffect, useState } from "react";
import { StyledSection } from "./GetCertificate.Styled";
import { StyledH2, StyledButton, StyledImg } from "./GetCertificate.Styled";

const iconPdf = require("../../images/icon_pdf.png");

const GetCertificate = () => {
  const [viewportWidth, setViewportWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <StyledSection>
      {viewportWidth < 767 ? <StyledH2>Получить сертификат</StyledH2> : false}
      <StyledButton>Загрузить файл</StyledButton>
      <StyledImg src={iconPdf} alt="icon pdf" />
    </StyledSection>
  );
};

export default GetCertificate;
