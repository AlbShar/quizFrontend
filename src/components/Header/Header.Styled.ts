import styled from 'styled-components';

type HeaderStyledProps = {
  height?: number;
};
export const HeaderStyled = styled.header<HeaderStyledProps>`
  box-sizing: border-box;
  background: #EEEEFF;
  width: 100%;
  margin: 0 0 12px 0;
  padding: 30px 0;

  ${function ({ height }) {
    if (height) {
      return `
      @media screen and (min-width: ${1023.8}px) {
        height: ${height}px;
      }
            `;
    }
  }}}
`;
