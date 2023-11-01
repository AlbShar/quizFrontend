import ErrorIcon from '@mui/icons-material/Error';

import { StyledSpan, StyledDiv } from './errorMessage.Styled';

export const ErrorMessage = () => {
  return (
    <StyledDiv>
      <StyledSpan>Error!</StyledSpan>
      <ErrorIcon color='error' fontSize='medium' />
    </StyledDiv>
  );
};
