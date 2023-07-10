import './footer.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Container from '../Container/Container';
import Logo from '../Logo/Logo';
import { StyledFlexWrapper } from './Footer.Styled';

import {
  StyledFooter,
  StyledSection,
  StyledLi,
  StyledUl,
} from './Footer.Styled';

import type { FooterInfo } from '../../types/types';

const Footer = () => {
  

  const { t } = useTranslation();

  const infoMiddleFooter: FooterInfo[] = [
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
        <StyledFlexWrapper>
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
