import { FC } from 'react';

import { Link } from 'react-router-dom';
import { StyledImg } from './Logo.Styled';

interface ILogo {
  location: string;
  style?: React.CSSProperties;
}
const Logo: FC<ILogo> = ({ location, style }) => {
  return (
    <Link to="/">
      <StyledImg
        src={require('../../assets/images/logoQuiz.png')}
        alt='logo'
        location={location}
        style={style}
      />
    </Link>
  );
};

export default Logo;
