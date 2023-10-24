import { Link } from 'react-router-dom';

import { StyledImg } from 'components/logo/logo.Styled';
import logo from 'assets/images/logo.svg';


type LogoProps = {
  location: string;
  style?: React.CSSProperties;
};
export const Logo = ({ style }: LogoProps): JSX.Element => {
  return (
    <Link to='/'>
      <StyledImg src={logo} alt='logo' style={style} />
    </Link>
  );
};
