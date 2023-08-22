import Grid from '@mui/material/Grid';
import { useTranslation } from 'react-i18next';

import {
  StyledH3,
  StyledSection,
  StyledImg,
  StyledImgCurveLine,
  StyledArticle,
  StyledSpanNumber,
  StyledH4Title,
  StyledPText,
} from './BenefitInfo.Styled';
import img from '../../assets/images/img.svg';
import curve_line from '../../assets/images/curve_line.svg';

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
    <Grid container columns={{ xs: 2, md: 12 }}>
      <StyledImg src={img} alt='image' />
      <StyledSection>
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
      </StyledSection>
    </Grid>
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
        spacing={1}
        direction='row'
        columns={{ xs: 2, md: 12, lg: 12 }}
        alignItems='center'
      >
        <Grid item md={1} lg={0.7}>
          <StyledSpanNumber>{fullNumb}</StyledSpanNumber>
        </Grid>
        <Grid item md={5.15} lg={5.45}>
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
