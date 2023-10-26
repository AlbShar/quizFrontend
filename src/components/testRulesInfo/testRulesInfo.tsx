import { useTranslation } from 'react-i18next';
import Grid from '@mui/material/Grid';

import { Container } from 'components/container';
import testRule1 from 'assets/images/components/testRulesInfo/testRule1.svg';
import testRule2 from 'assets/images/components/testRulesInfo/testRule2.svg';
import testRule3 from 'assets/images/components/testRulesInfo/testRule3.svg';
import testRule4 from 'assets/images/components/testRulesInfo/testRule4.svg';

import {
  StyledH3,
  StyledH4,
  StyledArticleWrapper,
  StyledArticle,
  StyledP,
  StyleImg,
  StyledSection,
} from './testRules.Styled';

export const TestRulesInfo = () => {
  const { t } = useTranslation('', {
    keyPrefix: 'components.testRules',
  });

  const data = [
    {
      img: testRule1,
      text: t('rule1'),
    },
    {
      img: testRule2,
      text: t('rule2'),
    },
    {
      img: testRule3,
      text: t('rule3'),
    },
    {
      img: testRule4,
      text: t('rule4'),
    },
  ];
  return (
    <StyledSection id='rules'>
      <Container>
        <StyledArticleWrapper>
          <Grid
            container
            columns={{ xs: 2, md: 12, xl: 12 }}
            spacing={{ md: 3 }}
          >
            <Grid item xs={2} md={6} xl={6}>
              <StyledH3>{t('mainTitle')}</StyledH3>
            </Grid>
            <Grid item xs={2} md={6} xl={6}>
              <StyledH4>{t('subTitle')} </StyledH4>
            </Grid>
          </Grid>
          <Grid
            container
            columns={{ xs: 2, md: 12, xl: 12 }}
            spacing={1.875}
            alignItems='center'
          >
            {data.map((info, index) => {
              const { text, img } = info;
              return <Rule text={text} img={img} key={index} />;
            })}
          </Grid>
        </StyledArticleWrapper>
      </Container>
    </StyledSection>
  );
};

type TRules = {
  text: string;
  img: string;
};

const Rule = ({ text, img }: TRules) => {
  return (
    <Grid item xs={2} md={6} xl={3}>
      <StyledArticle>
        <StyleImg src={img} alt='ruleTest' />
        <StyledP>{text}</StyledP>
      </StyledArticle>
    </Grid>
  );
};
