import React from 'react';
import Container from '../../../components/Container/Container';
import { StyledSection, StyledH2, StyledH3, StyledArticle } from './ResultsData.Styled';

const ResultsData = () => {
    return (
        <Container>
            <StyledSection>
                <StyledArticle >
                    <StyledH3>Ваш результат</StyledH3>
                    <StyledH2>121 бала</StyledH2>
                </StyledArticle>
                <StyledArticle >
                    <StyledH3>Затраченное время</StyledH3>
                    <StyledH2>24 мин</StyledH2>
                </StyledArticle>
            </StyledSection>
        </Container>
    );
};

export default ResultsData;