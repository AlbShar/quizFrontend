import { useTranslation } from 'react-i18next';
import Grid from '@mui/material/Grid';
import { useContext } from 'react';

import { Container } from 'components/container';
import { FeedbackLink } from 'UI/feedbackLink';
import person_sitting from 'assets/images/components/aboutUs/person_sitting.svg';
import { ContextLanguage } from 'components/context';

import {
  StyledP,
  StyledH3,
  StyledImg,
  StyledArticle,
  StyledSection,
} from './styles/aboutUs.Styled';
import './styles/link.css';

import type { Languages } from 'types/types';

export const AboutUs = () => {
  const { t } = useTranslation('', {
    keyPrefix: 'components.aboutUs',
  });
  const [lang] = useContext(ContextLanguage);
  console.log(lang)
  const customStyleFeedback = {
    color: 'var(--color-purple)',
    font: 'var(--font-text5)',
    fontWeight: 700,
  };

  return (
    <StyledSection>
      <Container>
        <StyledArticle lang={lang}>
          <Grid container columns={{ xs: 2, md: 12, lg: 12 }}>
            <Grid item xs={2} md={6.2} lg={6.2}>
              <StyledH3>{t('mainTitle')}</StyledH3>
            </Grid>
            <Grid item xs={2} md={5.8} lg={5.8}>
              <StyledP>{t('text1')} </StyledP>
              <StyledP>{t('text2')} </StyledP>
              <StyledP>
                {t('text3')}
                <FeedbackLink style={customStyleFeedback} />
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
