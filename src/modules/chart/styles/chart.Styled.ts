import styled from 'styled-components';

import type { TChart } from '../types';

export const StyledArticle = styled.article<TChart>`
  box-sizing: border-box;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-height: 575px;
  width: 100%;
  height: ${({ typeChart }) => (typeChart === 'doughunt' ? 'auto' : '100%')};
  padding: 16px 8px 9px 8px;
  border-radius: 7px;
  margin: 0 0 10px 0;

  @media screen and (min-width: 767.8px) {
    max-width: 50%;
    margin: 0;
  }

  @media screen and (min-width: 1023.8px) {
    padding: 15px 8px;
  }
`;

export const StyledP = styled.article`
  font: var(--font-text6-regular);
  color: #29313c;
  text-align: justify;
  margin: 12px 0 0 0;
`;

export const StyledSpan = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -25%);
  font: var(--font-text1);
  color: #6768d7;
`;
