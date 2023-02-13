import {FC} from 'react';
// import logo from "../../assets/images/logoQuiz.png";
import { StyledImg } from './Logo.Styled';

const logo = require("../../assets/images/logoQuiz.png");
interface ILogo {
    location: string
}
const Logo: FC<ILogo> = ({location}) => {
    return (
        <StyledImg src={logo} alt="logo" loc={location}/>
    );
};

export default Logo;