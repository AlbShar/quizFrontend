import { FC } from 'react';

import Header from '../../../components/Header/Header';
import Logo from '../../../components/Logo/Logo';
import UserInfo from '../components/UserInfo/UserInfo';
import FlexWrapper from '../../../components/FlexWrapper/FlexWrapper';
import Container from '../../../components/Container/Container';

import { StyledH1, StyledH2, StyledArticle } from './HeaderResult.Styled';

const HeaderResult: FC = () => {
  return (
    <Header height={235}>
      <Container>
        <FlexWrapper widthColumnStart={320} widthColumnEnd={767.8}>
          <StyledArticle>
            <Logo location='header' style={{ margin: '0 auto' }} />
            <StyledH1>Поздравляю!</StyledH1>
            <StyledH2>Вы прошли тест &#58;&#41;</StyledH2>
          </StyledArticle>
          <FlexWrapper
            style={{
              margin: '16px 0 19px 0',
              maxWidth: 642,
              width: '100%',
              boxSizing: 'border-box',
            }}
            widthColumnStart={320}
            widthColumnEnd={767.8}
            gap={24}
          >
            <UserInfo />
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </Header>
  );
};

export default HeaderResult;
