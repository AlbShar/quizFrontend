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
  const { t } = useTranslation('', {
    keyPrefix: "components.aboutUs"
  });
  const customStyleFeedback = {color: 'var(--color-purple)', font: 'var(--font-text5)', fontWeight: 700};

  return (
    <StyledSection>
      <Container>
        <StyledArticle>
          <Grid container columns={{ xs: 2, md: 12, lg: 12 }}>
            <Grid item xs={2} md={6.2} lg={6.2}>
              <StyledH3>{t('mainTitle')}</StyledH3>
            </Grid>
            <Grid item xs={2} md={5.8} lg={5.8}>
              <StyledP>{t('text1')} </StyledP>
              <StyledP>{t('text2')} </StyledP>
              <StyledP>
                {t('text3')}
                <Feedback style={customStyleFeedback} />
                {t('text4')}
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
