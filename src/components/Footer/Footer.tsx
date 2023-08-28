import './footer.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid/Grid';

import Feedback from '../../UI/Feedback/Feedback';
import Container from '../Container/Container';
import Logo from '../Logo/Logo';

import {
  StyledFooter,
  StyledLi,
  StyledUl,
  StyledDivProfession,
  StyledDivName,
  StyledLink,
  StyledNav,
} from './Footer.Styled';

import type { FooterInfo } from '../../types/types';

const Footer = () => {
  const { t } = useTranslation();

  const team: FooterInfo[] = [
    {
      profession: t('Frontend-разработчик'),
      name: t('Альберт'),
      link: 'https://t.me/Albert_Sharipov',
    },
    {
      profession: t('Дизайнер'),
      name: t('Алиса'),
      link: 'https://t.me/lisa_vetta14',
    },
    {
      profession: 'Project manager',
      name: t('Наталья'),
      link: 'https://t.me/Nattalia_nat',
    },
    {
      profession: t('Тестировщик'),
      name: t('Настя'),
      link: 'https://t.me/nastya_botsul',
    },
  ];

  const elementsInfoMiddleFooter = team.map((item, index) => {
    return (
      <Grid item xs={(index === 0 || index === 2) ? 1.2 : 0.8 } md={3} lg={2} xl='auto'>
        <StyledLi key={index + 1}>
          <StyledLink href={item.link} target='_blank'>
            <StyledDivProfession> {item.profession}</StyledDivProfession>
            <StyledDivName> {item.name}</StyledDivName>
          </StyledLink>
        </StyledLi>
      </Grid>
    );
  });

  return (
    <StyledFooter>
      <Container>
        <Grid
          container
          columns={{ xs: 2, md: 12, xl: 12 }}
          alignItems='center'
          direction='row'
        >
          <Grid item xs={1.3} md={3} xl={2}>
            <Logo location='footer' />
          </Grid>
          <Grid item xs md={6} xl={4}>
            <Grid container flexDirection='row' columns={{ xs: 1, md: 6 }}>
              <Grid item xs={1} md={3}>
                <Feedback />
              </Grid>
              <Grid item xs={1} md={3}>
                <div
                  style={{
                    color: 'white',
                    font: 'var(--font-text7)',
                  }}
                >
                  Начать тест
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={12} xl={6}>
            <Grid
              container
              columns={{ xs: 2, md: 12, xl: 6 }}
              justifyContent='center'
              alignItems='center'
            >
              <StyledNav id="team">
                <StyledUl>
                  <Grid
                    container
                    columns={{ xs: 2, md: 12, xl: 6 }}
                    columnSpacing={{ xs: 3, xl: 5 }}
                    rowSpacing={{ xs: 3 }}
                  >
                    {elementsInfoMiddleFooter}
                  </Grid>
                </StyledUl>
              </StyledNav>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
