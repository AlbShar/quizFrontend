import {FC} from 'react';
import Header from '../../../components/Header/Header';
import FlexWrapper from '../../../components/FlexWrapper/FlexWrapper';
import Logo from '../../../components/Logo/Logo';
import {
    StyledH1, StyledH2 
  } from "./HeaderResult.Styled";
  import UserInfo from '../components/UserInfo/UserInfo';

const HeaderResult: FC = () => {
    return (
        <Header>
            <FlexWrapper widthColumnStart={320}>
                <Logo location='header' style={{margin: '0 auto'}}/>
                <StyledH1>Поздравляю, Антон</StyledH1>
                <StyledH2>Вы успешно прошли тестирование</StyledH2>
                <UserInfo/>
            </FlexWrapper>
        </Header>
    );
};

export default HeaderResult;