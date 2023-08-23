import './footer.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid/Grid';

import Feedback from '../../UI/Feedback/Feedback';
import Container from '../Container/Container';
import Logo from '../Logo/Logo';

import {
  StyledFooter,
  StyledSection,
  StyledLi,
  StyledUl,
  StyledDivProfession,
  StyledDivName,
  StyledLink,
  StyledFlexWrapper,
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
      <Grid item xs={1} md={3} lg={1.5}>
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
        <Grid container columns={{ xs: 2, md: 12, lg: 12 }}>
          <Grid container columns={{ xs: 2, md: 12, lg: 6 }}>
            <Grid item xs={1} md={6}>
              <Logo location='footer' />
            </Grid>
            <Grid item xs={1} md={5}>
              <StyledFlexWrapper>
                <Feedback />
                <div
                  style={{
                    color: 'white',
                    font: 'var(--font-text7)',
                  }}
                >
                  Начать тест
                </div>
              </StyledFlexWrapper>
            </Grid>
          </Grid>

          <Grid
            container
            columns={{ xs: 2, md: 12, lg: 6 }}
            justifyContent='center'
          >
            <nav style={{ margin: '20px 0 0 0', width: '100%' }}>
              <StyledUl>
                <Grid
                  container
                  columns={{ xs: 2, md: 12, lg: 6 }}
                  columnSpacing={{ md: 0 }}
                  spacing={{ xs: 3, md: 0 }}
                >
                  {elementsInfoMiddleFooter}
                </Grid>
              </StyledUl>
            </nav>
          </Grid>
        </Grid>

        {/* <Grid
          container
          columns={{ xs: 2, md: 12, lg: 4 }}
          columnSpacing={{ xs: 3, lg: 0 }}
          alignItems={'center'}
        >
          <Grid item xs={1} md={4} lg={1}>
            <Logo location='footer' />
          </Grid>
          <Grid item xs={1} md={6} lg={2}>
            <StyledFlexWrapper>
              <Feedback />
              <div
                style={{
                  color: 'white',
                  font: 'var(--font-text7)',
                }}
              >
                Начать тест
              </div>
            </StyledFlexWrapper>
          </Grid>
        </Grid>
        <nav style={{ margin: '40px 0 0 0' }}>
          <StyledUl>
            <Grid
              container
              columns={{ xs: 2, md: 12, lg: 6 }}
              spacing={{ xs: 4, lg: 1 }}
            >
              {elementsInfoMiddleFooter}
            </Grid>
          </StyledUl>
        </nav> */}
      </Container>
    </StyledFooter>
  );
};

export default Footer;
