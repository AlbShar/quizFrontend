import {FC} from 'react';
import { StyledLabel, StyledUserData, StyledArticle} from "./UserInfo.Styled";
import { StyledSection } from './UserInfo.Styled';

const UserInfo: FC = () => {
    return (
        <StyledSection>
            <StyledArticle>
                <StyledLabel>Имя</StyledLabel>
                <StyledUserData>Антон</StyledUserData>
            </StyledArticle>
            <article style={{padding: ' 9px 0 0 0'}}>
                <StyledLabel as='span'>Email</StyledLabel>
                <StyledUserData as='span'>Anton@gmail.com</StyledUserData>
            </article>
        </StyledSection>
    );
};

export default UserInfo;