import './footer.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Container from '../../../components/Container/Container';
import Logo from '../../../components/Logo/Logo';
import { StyledFlexWrapper } from '../../../styles/FlexWrapper.Styled';

import {
  StyledFooter,
  StyledSection,
  StyledLi,
  StyledUl,
} from './Footer.Styled';

const Footer = () => {
  interface InfoFooter {
    text: string;
    link: '/reportbug' | '/reestablish' | '/politics';
  }

  const { t } = useTranslation();

  const infoMiddleFooter: InfoFooter[] = [
    { text: t('Сообщить'), link: '/reportbug' },
    { text: t('Восстановить'), link: '/reestablish' },
    { text: t('Политика'), link: '/politics' },
  ];

  const elementsInfoMiddleFooter = infoMiddleFooter.map((item, index) => {
    return (
      <StyledLi key={index + 1}>
        <Link className='footer__list-link' to={item.link}>
          {item.text}
        </Link>
      </StyledLi>
    );
  });

  return (
    <StyledFooter>
      <Container>
        <StyledFlexWrapper widthFlexStart={767.8} gap={15} jc={'flex-start'}>
          <Logo location='footer' />
          <StyledSection>
            <nav>
              <StyledUl>{elementsInfoMiddleFooter}</StyledUl>
            </nav>
          </StyledSection>
        </StyledFlexWrapper>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
