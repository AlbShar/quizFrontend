import { useEffect, useState, FC } from "react";

import { StyledSection } from "./GetCertificate.Styled";
import { StyledH2, StyledButton, StyledImg } from "./GetCertificate.Styled";

const GetCertificate: FC = () => {
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
      <StyledImg src={require("../../images/icon_pdf.png")} alt="icon pdf" />
    </StyledSection>
  );
};

export default GetCertificate;
