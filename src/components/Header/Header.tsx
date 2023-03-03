import {FC} from 'react';
import { HeaderStyled } from './Header.Styled';

interface IHeader {
    children: React.ReactNode;
}
const Header:FC<IHeader> = ({children}) => {
    return (
        <HeaderStyled>
            {children}
        </HeaderStyled>
    );
};

export default Header;