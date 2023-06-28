import { HeaderStyled } from './Header.Styled';

type HeaderProps = {
  children: React.ReactNode;
  height?: number;
}
const Header = ({ children, height }: HeaderProps): JSX.Element => {
  return <HeaderStyled height={height}>{children}</HeaderStyled>;
};

export default Header;
