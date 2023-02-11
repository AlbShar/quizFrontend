import {FC} from 'react';
// import logo from "../../assets/images/logoQuiz.png";
import { StyledImg } from './Logo.Styled';

const logo = require("../../assets/images/logoQuiz.png");
interface Logo {
    location: string
}
const Logo: FC<Logo> = ({location}) => {
    return (
        <StyledImg src={logo} alt="logo" loc={location}/>
    );
};

export default Logo;