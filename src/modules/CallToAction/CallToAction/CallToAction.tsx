import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import Grid from '@mui/material/Grid';

import Container from '../../../components/Container/Container';
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
  StyledSection,
} from './CallToAction.styled';

type CallToActionProps = {
  isChooseProfession: boolean;
  setChooseProfession: (item: boolean) => void;
};

const CallToAction = ({
  isChooseProfession,
  setChooseProfession,
}: CallToActionProps) => {
  const { t } = useTranslation('', {
    keyPrefix: 'modules.callToAction',
  });
  const [idUser, setIdUser]: [string, (lang: string) => void] =
    useContext(ContextIdUser);

  const startTest = () => {
    const id = createIdUser();
    setIdUser(id);
    setValueToLocalStorage('idUser', id);
  };

  return (
    <StyledSection id='startTest'>
      <Container>
        <Grid
          container
          columns={{ xs: 2, md: 12, lg: 12, xl: 12 }}
          alignItems='center'
        >
          <Grid item xs={2} md={12} lg={8} xl={8}>
            <StyledCallToAction id='CallToAction'>
              <StyledH1>{t('mainTitle')}</StyledH1>
              <InfoTest
                isChooseProfession={isChooseProfession}
                setChooseProfession={setChooseProfession}
              />
              <StyledH2>{t('subTitle')}</StyledH2>
              <StyledDiv>
                <DropdownProfession setChooseProfession={setChooseProfession} />
                <LinkBtn
                  pageTo='quiz'
                  onClick={startTest}
                  text={t('textStartBtn')}
                  isDisabledBtn={!isChooseProfession}
                />
              </StyledDiv>
            </StyledCallToAction>
          </Grid>
          <Grid item xs={2} md={12}>
            <StyledImg src={require('../icons/img1.png')} alt='img' />
          </Grid>
        </Grid>
      </Container>
    </StyledSection>
  );
};

export default CallToAction;
