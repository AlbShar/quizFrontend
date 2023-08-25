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
      profession: 'Разработка',
      name: 'Альберт',
      link: 'https://t.me/Albert_Sharipov',
    },
    {
      profession: 'Дизайн',
      name: 'Алиса',
      link: 'https://t.me/lisa_vetta14',
    },
    {
      profession: 'Project manager',
      name: 'Наталья',
      link: 'https://t.me/Nattalia_nat',
    },
    {
      profession: 'Тестирование',
      name: 'Анастасия',
      link: 'https://t.me/nastya_botsul',
    },
  ];

  const elementsInfoMiddleFooter = team.map((item, index) => {
    return (
      <Grid item xs={1} md={3} lg={2} xl='auto'>
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
          <Grid item xs={1} md={3} xl={2}>
            <Logo location='footer' />
          </Grid>
          <Grid item xs={1} md={6} xl={4}>
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
