import { useTranslation } from 'react-i18next';

import Container from '../../components/Container/Container';
import { StyledMain } from '../../styles/Main.Styled';
import UserForm from '../../modules/UserForm';

import { StyledH1, StyledSection, StyledP } from './Feedback.Styled';

const ReportBugPage = () => {
  const { t } = useTranslation();

  return (
    <StyledMain>
      <Container>
        <StyledSection>
          <article>
            <StyledH1>{t('Обратная_связь')}</StyledH1>
            <StyledP>{t('Учли_ваши_результаты')}</StyledP>
          </article>
          <article>
            <UserForm />
          </article>
        </StyledSection>
      </Container>
    </StyledMain>
  );
};

export default ReportBugPage;
