import { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';

import InfoTest from '../components/InfoTest/InfoTest';
import LinkBtn from '../../../UI/LinkBtn/LinkBtn';
import { createIdUser } from '../helpers/createIdUser';
import { ContextIdUser } from '../../../components/Context';
import { setValueToLocalStorage } from '../../../helpers/setValueToLocalStorage';
import DropdownProfession from '../UI/DropdownProfession';
import {
  StyledCallToAction,
  StyledH1,
  StyledP,
  StyledDiv,
  StyledDivWrapper,
} from './CallToAction.styled';

type CallToActionProps = {
  isChooseProfession: boolean;
  setChooseProfession: (item: boolean) => void;
};

const CallToAction = ({
  isChooseProfession,
  setChooseProfession,
}: CallToActionProps) => {
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
      <InfoTest isChooseProfession={isChooseProfession} />
      <StyledP>{t('Добро_пожаловать')}</StyledP>
      <StyledP>{t('Тест_будет')}</StyledP>
      <StyledDiv>
        <DropdownProfession setChooseProfession={setChooseProfession} />
        <StyledDivWrapper>
          <LinkBtn
          pageTo='quiz'
          onClick={startTest}
          text='Начать тест'
          isDisabledBtn={!isChooseProfession}
        ></LinkBtn>
        </StyledDivWrapper>
        
      </StyledDiv>
    </StyledCallToAction>
  );
};

export default CallToAction;
