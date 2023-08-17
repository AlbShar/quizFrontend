import Grid from '@mui/material/Grid';

import InfoCard from '../../components/InfoCard/InfoCard';
import { StyledH3, StyledSection, StyledImg } from './BenefitInfo.Styled';
import img from "./images/img.svg"

const BenefitInfo = () => {
  const data = [
    {
      title: 'Оценку своих знаний',
      text: 'Благодаря специальным вопросам, вы сможете по новому взглянуть на освоенный вами материал ',
    },
    {
      title: 'Выявление слабых мест',
      text: 'Вы сможете оценить свои знания по каждой из них, и увидеть, какой теме требуется еще уделить внимание',
    },
    {
      title: 'Отчёт о результатах',
      text: 'В финальном отчёте, вы сможете явно видеть, где у вас пробелы в знаниях или навыках, и сфокусироваться именно на них',
    },
  ];
  return (
    <Grid container columns={{ xs: 2, md: 12 }}>
      <StyledSection>
        <StyledImg src={img} alt='image' />

        <StyledH3>Что вы получите?</StyledH3>
        {data.map((item, index) => {
          const { title, text } = item;
          return (
            <InfoCard
              title={title}
              text={text}
              numberCard={index + 1}
              key={index + 1}
            />
          );
        })}
      </StyledSection>
    </Grid>
  );
};

export default BenefitInfo;
