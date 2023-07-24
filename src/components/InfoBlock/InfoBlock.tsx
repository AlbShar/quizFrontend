import { ReactNode } from 'react';

import {
  StyledFeatureArticle,
  StyledSummary,
  StyledP,
  StyledDivWrapper,
} from './InfoBlock.styled';

type InfoBlockProps =  {
  title: string;
  text: string;
  idForText?: string;
  children?: ReactNode;
}

const InfoBlock = ({
  title,
  text,
  idForText,
}: InfoBlockProps): JSX.Element => {

  return (
    <StyledFeatureArticle>
      <details open>
        <StyledSummary>{title}</StyledSummary>
        <StyledDivWrapper>
          <StyledP id={idForText}>{text}</StyledP>
        </StyledDivWrapper>
      </details>
    </StyledFeatureArticle>
  );
  
};

export default InfoBlock;
