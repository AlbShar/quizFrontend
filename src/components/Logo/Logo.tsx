import { FC } from 'react';

import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.svg';

import { StyledImg } from './Logo.Styled';


interface ILogo {
  location: string;
  style?: React.CSSProperties;
}
const Logo: FC<ILogo> = ({ location, style }) => {
  return (
    <Link to="/">
      <StyledImg
        src={logo}
        alt='logo'
        location={location}
        style={style}
      />
    </Link>
  );
};

export default Logo;
