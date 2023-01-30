import React from 'react';
import {
    StyledFeatureArticle,
    StyledH2,
    StyledP,
    StyledImg,
  } from "./styles/Features.Styled";

const InfoBlock = ({title, text, imgSrc, imgAlt, idForText}) => {
    return (
        <StyledFeatureArticle>
            <StyledH2>{title}</StyledH2>
            {!!imgSrc && <StyledImg src={imgSrc} alt={imgAlt}/>}
            <StyledP id={idForText}>{text}</StyledP>
        </StyledFeatureArticle>
    );
};

export default InfoBlock;