import Grid from '@mui/material/Grid';
import { useTranslation } from 'react-i18next';

import InfoCard from '../../components/InfoCard/InfoCard';
import {
  StyledH3,
  StyledSection,
  StyledImg,
  StyledImgCurveLine,
} from './BenefitInfo.Styled';
import img from "./images/img.svg"
import curve_line from "./images/curve_line.svg";

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

export default BenefitInfo;
