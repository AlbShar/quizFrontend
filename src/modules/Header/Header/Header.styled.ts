import styled from 'styled-components';

type FlexWrapper = {
  gap?: number;
};

const StyledFlexTopHeader = styled.article<FlexWrapper>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ gap }) => (gap ? gap + 'px' : '')};
  margin: 0 0 13px 0;

  @media screen and (min-width: 767.8px) {
    justify-content: flex-start;
    gap: 80px;
  }

  @media screen and (min-width: 1023.8px) {
    margin: 0
  }
`;

const StyledFlexBottomHeader = styled.article<FlexWrapper>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ gap }) => (gap ? gap + 'px' : '')};

  @media screen and (min-width: 767.8px) {
    align-items: stretch;
  }

  &:not(: last-child) {
    margin: 0 0 13px 0;
  }

  @media screen and (min-width: 1023.8px) {
    gap: 27px;
  }
`;

const StyledFlexSection = styled.section<FlexWrapper>`
  @media screen and (min-width: 1023.8px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const StyledHeader = styled.header`
  box-sizing: border-box;
  background: var(--color-dark);
  width: 100%;
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
  StyledFlexTopHeader,
  StyledFlexBottomHeader,
  StyledHeader,
  StyledFlexSection,
  StyledImg,
  StyledListWrapper,
};
