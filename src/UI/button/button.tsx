import { useTranslation } from 'react-i18next';

import { StyledButton } from 'UI/button/button.Styled';

type ButtonProps = {
  text: string;
  disabled: boolean;
};
export const Button = ({ text, disabled }: ButtonProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <StyledButton type='submit' disabled={disabled}>
      {t(text)}
    </StyledButton>
  );
};
