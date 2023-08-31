import Grid from '@mui/material/Grid';
import { useTranslation } from 'react-i18next';

import Container from '../Container/Container';
import img from '../../assets/images/img.svg';
import curve_line from '../../assets/images/curve_line.svg';

import {
  StyledH3,
  StyledArticleWrapper,
  StyledImg,
  StyledImgCurveLine,
  StyledArticle,
  StyledSpanNumber,
  StyledH4Title,
  StyledPText,
  StyledSection,
} from './BenefitInfo.Styled';

const BenefitInfo = () => {
  const { t } = useTranslation();

  const data = [
    {
      title: t('Оценка_знаний'),
      text: t('Благодаря_вопросам'),
    },
    {
      title: t('Выявление_слабых_мест'),
      text: t('Cможете_оценить_знания'),
    },
    {
      title: t('Отчет'),
      text: t('В_финальном_отчёте'),
    },
  ];
  return (
    <StyledSection>
      <Container>
        <Grid container columns={{ xs: 2, md: 6, lg: 12 }}>
          <StyledImg src={img} alt='image' />
          <StyledArticleWrapper>
            <StyledH3>Что вы получите?</StyledH3>
            {data.map((item, index) => {
              const { title, text } = item;
              return (
                <InfoCard
                  title={title}
                  text={text}
                  numberCard={index + 1}
                  key={index + 1}
                />
              );
            })}
            <StyledImgCurveLine src={curve_line} alt='curve_line' />
          </StyledArticleWrapper>
        </Grid>
      </Container>
    </StyledSection>
  );
};

type InfoCardProps = {
  numberCard: number;
  title: string;
  text: string;
};

const InfoCard = ({ numberCard, title, text }: InfoCardProps) => {
  const fullNumb = numberCard < 10 ? `0${numberCard}` : numberCard;
  return (
    <StyledArticle>
      <Grid
        container
        direction='row'
        columns={{ xs: 2, md: 6, lg: 12 }}
        alignItems='center'
        columnSpacing={{xs:2}}
      >
        <Grid item md={0.7} lg={0.7}>
          <StyledSpanNumber>{fullNumb}</StyledSpanNumber>
        </Grid>
        <Grid item xs md lg={5.45}>
          <StyledH4Title>{title}</StyledH4Title>
        </Grid>
        <Grid item xs={2} md={5.5} lg={5}>
          <StyledPText>{text}</StyledPText>
        </Grid>
      </Grid>
    </StyledArticle>
  );
};

export default BenefitInfo;
