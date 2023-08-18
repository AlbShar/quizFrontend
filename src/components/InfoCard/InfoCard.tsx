import Grid from '@mui/material/Grid';

import {
  StyledArticle,
  StyledSpanNumber,
  StyledH4Title,
  StyledPText,
} from './InfoCard.Styled';

type InfoCardProps = {
  numberCard: number;
  title: string;
  text: string;
};

const InfoCard = ({ numberCard, title, text }: InfoCardProps) => {
  const fullNumb = numberCard < 10 ? `0${numberCard}` : numberCard;
  return (
    <StyledArticle>
      <Grid
        container
        spacing={1}
        direction='row'
        columns={{ xs: 2, md: 12, lg: 12 }}
        alignItems='center'
      >
        <Grid item md={1} lg={0.7}>
          <StyledSpanNumber>{fullNumb}</StyledSpanNumber>
        </Grid>
        <Grid item md={4} lg={4.6}>
          <StyledH4Title>{title}</StyledH4Title>
        </Grid>
        <Grid item xs={2} md={6} lg={5}>
          <StyledPText>{text}</StyledPText>
        </Grid>
      </Grid>
    </StyledArticle>
  );
};

export default InfoCard;
