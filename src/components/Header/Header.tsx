import {FC} from 'react';
import { HeaderStyled } from './Header.Styled';

interface IHeader {
    children: React.ReactNode;
    height?: number;
}
const Header:FC<IHeader> = ({children, height}) => {
    return (
        <HeaderStyled height={height}>
            {children}
        </HeaderStyled>
    );
};

export default Header;