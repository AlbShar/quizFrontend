import { FC, ReactNode } from 'react';

import {
  StyledFeatureArticle,
  StyledSummary,
  StyledP,
  StyledImg,
  StyledDivWrapper,
} from './InfoBlock.styled';

interface Info {
  title: string;
  text: string;
  imgSrc: string;
  imgAlt: string;
  idForText?: string;
  children?: ReactNode;
}

const InfoBlock: FC<Info> = ({ title, text, imgSrc, imgAlt, idForText }) => {
  return (
    <StyledFeatureArticle>
      <details>
        <StyledSummary>{title}</StyledSummary>
        <StyledDivWrapper>
          {!!imgSrc && <StyledImg src={imgSrc} alt={imgAlt} />}
          <StyledP id={idForText}>{text}</StyledP>
        </StyledDivWrapper>
      </details>
    </StyledFeatureArticle>
  );
};

export default InfoBlock;
