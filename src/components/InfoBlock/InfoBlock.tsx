import {FC} from 'react';
import {
    StyledFeatureArticle,
    StyledH2,
    StyledP,
    StyledImg,
    StyledDivWrapper
  } from "./InfoBlock.styled";

  interface Info {
    title: string;
    text: string;
    imgSrc: string;
    imgAlt: string;
    idForText?: string;
  }

const InfoBlock: FC<Info> = ({title, text, imgSrc, imgAlt, idForText}) => {
    return (
        <StyledFeatureArticle>
            <StyledH2>{title}</StyledH2>
            <StyledDivWrapper>
            {!!imgSrc && <StyledImg src={imgSrc} alt={imgAlt}/>}
            <StyledP id={idForText}>{text}</StyledP>
            </StyledDivWrapper>
        </StyledFeatureArticle>
    );
};

export default InfoBlock;