import styled from "styled-components";

const ListItem = styled.li`
  color: white;
  font: var(--font-little-text-bold);
  display: flex;
  justify-content: flex-start;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 5px;
  }

  @media screen and (min-width: 459.8px) {
    font: var(--font-text-bold);

    &:not(:last-child) {
      margin: 0 30px 0 0;
    }
    &:not(:last-child):after {
        position: relative;
        content: "/";
        left: 12px;
    }
  }
`;

export { ListItem };
