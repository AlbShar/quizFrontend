import Grid from '@mui/material/Grid';
import { useTranslation } from 'react-i18next';

import testRule1 from '../../assets/images/testRule1.svg';
import testRule2 from '../../assets/images/testRule2.svg';
import testRule3 from '../../assets/images/testRule3.svg';
import testRule4 from '../../assets/images/testRule4.svg';

import {
  StyledH3,
  StyledH4,
  StyledSection,
  StyledArticle,
  StyledP,
  StyleImg,
} from './TestRules.Styled';

const TestRules = () => {
  const data = [
    {
      img: testRule1,
      text: 'Вы можете вернуться только на один вопрос назад и изменить свой ответ.',
    },
    {
      img: testRule2,
      text: 'На каждый вопрос есть только один правильный ответ, несколько вариантов выбрать нельзя.',
    },
    {
      img: testRule3,
      text: 'Тест состоит из нескольких разделов (блоков) с вопросами различной тематики.',
    },
    {
      img: testRule4,
      text: 'Вы можете приостановить время, нажав кнопку "Пауза", и в любой момент вернуться к тесту.',
    },
  ];
  return (
    <StyledSection>
      <Grid container columns={{ xs: 2, md: 12, xl: 12 }}>
        <Grid item xs={2} xl={6}>
          <StyledH3>Правила прохождения теста</StyledH3>
        </Grid>
        <Grid item xs={2} xl={6}>
          <StyledH4>
            Ознакомьтесь с правилами прохождения теста, выберите направление, а
            затем пройдите тестирование.
          </StyledH4>
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
