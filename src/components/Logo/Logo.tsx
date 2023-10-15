import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.svg';

import { StyledImg } from './Logo.Styled';

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

