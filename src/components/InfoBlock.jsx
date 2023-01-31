import React from 'react';
import {
    StyledFeatureArticle,
    StyledH2,
    StyledP,
    StyledImg,
    StyledDivWrapper
  } from "./styles/InfoBlock.styled";

const InfoBlock = ({title, text, imgSrc, imgAlt, idForText}) => {
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