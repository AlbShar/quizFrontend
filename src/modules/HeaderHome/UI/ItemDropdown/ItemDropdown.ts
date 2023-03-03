import styled from "styled-components";

const StyledLi = styled.li`
  font: var(--font-text-regular);
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export {
  StyledLi,
};
