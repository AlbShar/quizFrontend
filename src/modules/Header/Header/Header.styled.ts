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
    gap: 10px;
    margin: 0;
  }

  @media screen and (min-width: 1023.8px) {
    gap: 80px;
  }
`;

const StyledFlexBottomHeader = styled.article<FlexWrapper>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ gap }) => (gap ? gap + 'px' : '')};
  margin-top: 13px;

  &:not(: last-child) {
    margin: 0 0 13px 0;
  }

  @media screen and (min-width: 767.8px) {
    align-items: stretch;
    margin: 0;
    gap: 27px;
  }

`;

const StyledFlexSection = styled.section<FlexWrapper>`
  position: relative;

  @media screen and (min-width: 767.8px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 62px;
  }

  @media screen and (min-width: 1023.8px) {
    gap: 150px;
  }

  @media screen and (min-width: 1299.8px) {
    justify-content: space-between;
  }
`;

const StyledHeader = styled.header`
  box-sizing: border-box;
  background: var(--color-dark);
  width: 100%;
  padding: 19px 0 0 0 ;

}

`;

const StyledListWrapper = styled.div`
  display: none;

  @media screen and (min-width: 767.8px) {
    display: none;
  }
}`;

const StyledImg = styled.img`
  position: absolute;
  top: 12px;
  right: 0;
  width: 24px;
  height: 24px;
  cursor: pointer;

  @media screen and (min-width: 1299.8px) {
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
