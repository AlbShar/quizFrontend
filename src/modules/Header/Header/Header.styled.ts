import styled from 'styled-components';

type FlexWrapper = {
  gap?: number;
};

const StyledFlexArticle = styled.article<FlexWrapper>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ gap }) => (gap ? gap + 'px' : '')};

  @media screen and (min-width: 767.8px) {
    align-items: stretch;
  }
`;

const StyledFlexSection = styled.section<FlexWrapper>`
  @media screen and (min-width: 767.8px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid red;
  }
`;

const StyledHeader = styled.header`
  box-sizing: border-box;
  background: #EEEEFF;
  width: 100%;
  margin: 0 0 12px 0;
  padding: 30px 0;
}

`;

const StyledListWrapper = styled.div`
  display: none;

  @media screen and (min-width: 767.8px) {
    display: none;
  }
}`;



const StyledImg = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;

  @media screen and (min-width: 1023.8px) {
    display: none;
  }
}`;

export {
  StyledFlexArticle,
  StyledHeader,
  StyledFlexSection,
  StyledImg,
  StyledListWrapper,
};
