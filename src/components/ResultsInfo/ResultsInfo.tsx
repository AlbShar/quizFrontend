import Grid from '@mui/material/Grid';
import { useTranslation } from 'react-i18next';

import Container from '../Container/Container';
import curver_line2 from '../../assets/images/curve_line2.svg';

import {
  StyledH3,
  StyledH4,
  StyledH5,
  StyledArticle,
  StyledArticleWrapper,
  StyledImg,
  StyledSection,
} from './ResultsInfo.Styled';

const ResultsInfo = () => {
  const texts = [
    'Количество набранных баллов',
    'Затраченное время на тест',
    'Ваши верные и неверные ответы',
    'Пояснения к каждому ответу',
  ];
  return (
    <StyledSection>
      <Container>
        <StyledArticleWrapper>
          <Grid container columns={{ xs: 2, md: 12 }}>
            <Grid item xs={2} md={6.2}>
              <StyledH3>Результаты</StyledH3>
            </Grid>
            <Grid item xs={2} md={5.5}>
              <StyledH4>
                После прохождения тестирования Вам будет доступна информация о
                результатах тестирования.
              </StyledH4>
            </Grid>
          </Grid>

          <Grid
            container
            columns={{ xs: 2, md: 12 }}
            rowSpacing={1}
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

export default ResultsInfo;
