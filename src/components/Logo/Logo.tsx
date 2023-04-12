import {FC} from "react";

// import logo from "../../assets/images/logoQuiz.png";
import { StyledImg } from "./Logo.Styled";

interface ILogo {
    location: string
    style?: React.CSSProperties
}
const Logo: FC<ILogo> = ({location, style}) => {
    return (
        <StyledImg src={require("../../assets/images/logoQuiz.png")} alt="logo" location={location} style={style}/>
    );
};

export default Logo;