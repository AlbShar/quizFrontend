import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import InfoTest from '../components/InfoTest/InfoTest';
import LinkBtn from '../../../UI/LinkBtn/LinkBtn';
import { createIdUser } from '../helpers/createIdUser';
import { ContextIdUser } from '../../../components/Context';
import { setValueToLocalStorage } from '../../../helpers/setValueToLocalStorage';
import DropdownProfession from '../UI/DropdownProfession';
import { StyledCallToAction, StyledH1, StyledP } from './CallToAction.styled';

const CallToAction = () => {
  const { t } = useTranslation();
  const [idUser, setIdUser]: [string, (lang: string) => void] =
    useContext(ContextIdUser);

  const startTest = () => {
    const id = createIdUser();
    setIdUser(id);
    setValueToLocalStorage('idUser', id);
  };

  return (
    <StyledCallToAction id='CallToAction'>
      <StyledH1>{t('Тест_для_Frontend_разработчиков')}</StyledH1>
      <InfoTest />
      <StyledP>{t('Добро_пожаловать')}</StyledP>
      <StyledP>{t('Тест_будет')}</StyledP>
      <div style={{display: 'flex', width: 600, justifyContent: 'space-between', alignItems: "center"}}>
        <DropdownProfession />
        <LinkBtn pageTo='quiz' onClick={startTest} text='Начать тест'></LinkBtn>
      </div>
    </StyledCallToAction>
  );
};

export default CallToAction;
