import { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import InfoTest from '../components/InfoTest/InfoTest';
import LinkBtn from '../../../UI/LinkBtn/LinkBtn';
import { createIdUser } from '../helpers/createIdUser';
import { ContextIdUser } from '../../../components/Context';
import { setValueToLocalStorage } from '../../../helpers/setValueToLocalStorage';
import DropdownProfession from '../UI/DropdownProfession';

import {
  StyledCallToAction,
  StyledH1,
  StyledH2,
  StyledDiv,
  StyledImg,
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
    <Box>
      <Grid container>
        <Grid item xs={12} md={8} lg={8} xl={6}>
          <StyledCallToAction id='CallToAction'>
            <StyledH1>{t('Тест_для')}</StyledH1>
            <InfoTest
              isChooseProfession={isChooseProfession}
              setChooseProfession={setChooseProfession}
            />
            <StyledH2>{t('Сайт_по_тестированию')}</StyledH2>
            <StyledDiv>
              <DropdownProfession setChooseProfession={setChooseProfession} />
              <LinkBtn
                pageTo='quiz'
                onClick={startTest}
                text='Начать тест'
                isDisabledBtn={!isChooseProfession}
              />
            </StyledDiv>
          </StyledCallToAction>
        </Grid>
        <Grid item xs={12} md={4} lg={4} xl={6}>
          <StyledImg src={require('../icons/img1.png')} alt='img' />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CallToAction;
