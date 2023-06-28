import { useTranslation } from 'react-i18next';

import { StyledButton } from './Button.Styled';

type ButtonProps = {
  text: string;
  action: () => void;
}
const Button = ({ text, action }: ButtonProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <StyledButton
      onClick={() => {
        action();
      }}
    >
      {t(text)}
    </StyledButton>
  );
};

export default Button;
