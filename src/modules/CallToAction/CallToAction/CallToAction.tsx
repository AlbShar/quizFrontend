import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import InfoTest from '../components/InfoTest/InfoTest';
import LinkBtn from '../../../UI/LinkBtn/LinkBtn';
import { createIdUser } from '../helpers/createIdUser';
import { ContextIdUser } from '../../../components/Context';

import { StyledCallToAction, StyledH1, StyledP } from './CallToAction.styled';

const CallToAction = () => {
  const { t } = useTranslation();
  const [idUser, setIdUser]: [string, (lang: string) => void] =
    useContext(ContextIdUser);

  return (
    <StyledCallToAction id='CallToAction'>
      <StyledH1>{t('Тест_для_Frontend_разработчиков')}</StyledH1>
      <InfoTest />
      <StyledP>{t('Добро_пожаловать')}</StyledP>
      <StyledP>{t('Тест_будет')}</StyledP>
      <LinkBtn
        pageTo='quiz'
        onClick={() => setIdUser(createIdUser())}
        text='Начать тест'
      ></LinkBtn>
    </StyledCallToAction>
  );
};

export default CallToAction;
