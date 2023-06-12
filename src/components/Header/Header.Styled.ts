import styled from 'styled-components';

interface IHeader {
  height?: number;
}
export const HeaderStyled = styled.header<IHeader>`
  background-color: #252b58;
  width: 100%;
  margin: 0 0 34px 0;

  @media screen and (min-width: 459.8px) {
    margin: 0 0 40px 0;
  }

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
