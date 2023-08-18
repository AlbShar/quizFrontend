import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import person_sitting from "../../assets/images/person_sitting.svg"

import { StyledP, StyledH3 } from "./AboutUs.Styled";
import "./link.css";

const AboutUs = () => {
    const { t } = useTranslation();

    return (
      <section>
        <StyledH3>{t('О_тесте')}</StyledH3>
        <StyledP>{t('Приветствуем_на_сайте')} </StyledP>
        <StyledP>{t('По_завершению')} </StyledP>
        <StyledP>
          {t('Сообщить_об_ошибке')}
          <Link to='/feedback' className='link'>
            {` «${t('Обратная_связь')}» `}
          </Link>
          {t('Напишите')}
        </StyledP>
        <img src={person_sitting} alt='person_sitting' />
      </section>
    );
};

export default AboutUs;