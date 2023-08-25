import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Grid from '@mui/material/Grid';

import Container from '../Container/Container';
import Feedback from '../../UI/Feedback/Feedback';
import person_sitting from '../../assets/images/person_sitting.svg';

import {
  StyledP,
  StyledH3,
  StyledImg,
  StyledArticle,
  StyledSection,
} from './AboutUs.Styled';
import './link.css';

const AboutUs = () => {
  const { t } = useTranslation();
  const customStyleFeedback = {color: 'var(--color-purple)', font: 'var(--font-text5)', fontWeight: 700};

  return (
    <StyledSection>
      <Container>
        <StyledArticle>
          <Grid container columns={{ xs: 2, md: 12, lg: 12 }}>
            <Grid item md={6.2} lg={6.2}>
              <StyledH3>{t('О_тесте')}</StyledH3>
            </Grid>
            <Grid item md={5.8} lg={5.8}>
              <StyledP>{t('Приветствуем_на_сайте')} </StyledP>
              <StyledP>{t('По_завершению')} </StyledP>
              <StyledP>
                {t('Сообщить_об_ошибке')}
                <Feedback style={customStyleFeedback} />
                {t('Напишите')}
              </StyledP>
            </Grid>
            <StyledImg src={person_sitting} alt='person_sitting' />
          </Grid>
        </StyledArticle>
      </Container>
    </StyledSection>
  );
};

export default AboutUs;
