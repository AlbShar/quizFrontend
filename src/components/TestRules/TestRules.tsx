import Grid from '@mui/material/Grid';
import Container from '../Container/Container';
import { useTranslation } from 'react-i18next';

import testRule1 from '../../assets/images/testRule1.svg';
import testRule2 from '../../assets/images/testRule2.svg';
import testRule3 from '../../assets/images/testRule3.svg';
import testRule4 from '../../assets/images/testRule4.svg';

import {
  StyledH3,
  StyledH4,
  StyledArticleWrapper,
  StyledArticle,
  StyledP,
  StyleImg,
  StyledSection,
} from './TestRules.Styled';

const TestRules = () => {
  const { t } = useTranslation();

  const data = [
    {
      img: testRule1,
      text: t('Вы_можете_вернуться'),
    },
    {
      img: testRule2,
      text: t('На_каждый_вопрос'),
    },
    {
      img: testRule3,
      text: t('Тест_состоит'),
    },
    {
      img: testRule4,
      text: t('Вы_можете_приостановить'),
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
              <StyledH3>{t('Правила_прохождения')}</StyledH3>
            </Grid>
            <Grid item xs={2} md={6} xl={6}>
              <StyledH4>{t('Ознакомьтесь')} </StyledH4>
            </Grid>
          </Grid>
          <Grid
            container
            columns={{ xs: 2, md: 12, xl: 12 }}
            spacing={3}
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

export default TestRules;
