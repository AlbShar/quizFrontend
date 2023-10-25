import { useTranslation } from 'react-i18next';
import Grid from '@mui/material/Grid/Grid';

import { FeedbackLink } from 'UI/feedbackLink';
import { Container } from 'components/container';
import { Logo } from 'components/logo';
import './styles/footer.css';

import {
  StyledFooter,
  StyledLi,
  StyledUl,
  StyledDivProfession,
  StyledDivName,
  StyledLink,
  StyledNav,
} from "./styles/footer.Styles";

import type { FooterInfo } from '../../types/types';

export const Footer = () => {
  const { t } = useTranslation('', {
    keyPrefix: 'components.footer',
  });

  const team: FooterInfo[] = [
    {
      profession: t('Frontend'),
      name: t('firstNameFrontend'),
      link: 'https://t.me/AlbertS1',
    },
    {
      profession: t('Designer'),
      name: t('firstNameDesigner'),
      link: 'https://t.me/lisa_vetta14',
    },
    {
      profession: 'Project manager',
      name: t('firstNamePM'),
      link: 'https://t.me/Nattalia_nat',
    },
  ];

  const teamOfProject = team.map((item, index) => {
    return (
      <Grid
        key={index + 1}
        item
        xs={index === 0 || index === 2 ? 1.35 : 0.3}
        md={3}
        lg={2}
        xl='auto'
      >
        <StyledLi>
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
          <Grid item xs={0.7} md={3} xl={2}>
            <Logo location='footer' />
          </Grid>
          <Grid item xs={1.3} md={6} xl={4}>
            <Grid
              container
              flexDirection='row'
              columns={{ xs: 1.3, md: 6 }}
              rowSpacing={2.5}
            >
              <Grid item xs={0.9} md={3}>
                <FeedbackLink />
              </Grid>
              <Grid item xs={0.3} md={3}>
                <StyledLink href='#header'>{t('textUpLink')}</StyledLink>
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
              <StyledNav id='team'>
                <StyledUl>
                  <Grid
                    container
                    columns={{ xs: 2, md: 12, xl: 6 }}
                    columnSpacing={{ xs: 3, xl: 5 }}
                    rowSpacing={4}
                  >
                    {teamOfProject}
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
