import { useTranslation } from 'react-i18next';

import Container from '../../components/Container/Container';
import { StyledMain } from '../../styles/Main.Styled';
import UserForm from '../../modules/UserForm';

import { StyledH1, StyledSection, StyledP } from './Feedback.Styled';

const Feedback = () => {
  const { t } = useTranslation('', {
    keyPrefix: 'pages.feedback',
  });
  return (
    <StyledMain>
      <Container>
        <StyledSection>
          <article>
            <StyledH1>{t('title')}</StyledH1>
            <StyledP>{t('text')}</StyledP>
          </article>
          <article>
            <UserForm />
          </article>
        </StyledSection>
      </Container>
    </StyledMain>
  );
};

export default Feedback;
