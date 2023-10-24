import Grid from '@mui/material/Grid';
import { useTranslation } from 'react-i18next';
import {Container} from 'components/Container';
import curver_line2 from 'assets/images/curve_line2.svg';

import {
  StyledH3,
  StyledH4,
  StyledH5,
  StyledArticle,
  StyledArticleWrapper,
  StyledImg,
  StyledSection,
} from './ResultsInfo.Styled';

export const ResultsInfo = () => {
  const { t } = useTranslation('', {
    keyPrefix: 'components.resultsInfo'
  });

  const texts = [t('result1'), t('result2'), t('result3'), t('result4')];
  return (
    <StyledSection>
      <Container>
        <StyledArticleWrapper>
          <Grid container columns={{ xs: 2, md: 12 }}>
            <Grid item xs={2} md={6.2}>
              <StyledH3>{t('mainTitle')}</StyledH3>
            </Grid>
            <Grid item xs={2} md={5.5}>
              <StyledH4>{t('subTitle')}</StyledH4>
            </Grid>
          </Grid>

          <Grid
            container
            columns={{ xs: 2, md: 12 }}
            rowSpacing={0.75}
            columnSpacing={{ md: 1 }}
          >
            {texts.map((text, index) => {
              return (
                <Result text={text} key={index} id={`result${index + 1}`} />
              );
            })}
          </Grid>
          <StyledImg src={curver_line2} alt='curver_line' />
        </StyledArticleWrapper>
      </Container>
    </StyledSection>
  );
};

const Result = ({ text, id }) => {
  return (
    <Grid item xs={2} md={6}>
      <StyledArticle id={id}>
        <StyledH5>{text}</StyledH5>
      </StyledArticle>
    </Grid>
  );
};

