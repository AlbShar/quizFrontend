import React from 'react';
import { StyledSection } from './GetCertificate.Styled';
import { StyledH2, StyledButton, StyledImg } from './GetCertificate.Styled';

const iconPdf = require("../../images/icon_pdf.png");
const GetCertificate = () => {
    return (
        <StyledSection>
            <StyledH2>Получить сертификат</StyledH2>
            <StyledButton>Загрузить файл</StyledButton>
            <StyledImg src={iconPdf} alt="icon pdf" />
        </StyledSection>
    );
};

export default GetCertificate;