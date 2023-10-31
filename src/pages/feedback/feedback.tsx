import { useTranslation } from 'react-i18next';

import {Container} from 'components/container';
import UserForm from 'modules/userForm';
import { Main } from 'components/main';

import {
  StyledH1,
  StyledSection,
  StyledP,
} from './feedback.Styled';

const Feedback = () => {
  const { t } = useTranslation('', {
    keyPrefix: 'pages.feedback',
  });
  return (
    <Main>
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
    </Main>
  );
};

export default Feedback;

