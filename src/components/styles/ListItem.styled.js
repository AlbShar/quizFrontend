import styled from "styled-components";

const ListItem = styled.li`
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const ListItemInfoBlock = styled.li`
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

const ListItemFooter = styled.li`
  text-align: left;

  &:not(:last-child) {
    margin: 0 0 12px 0;
  }

  @media screen and (min-width: 767.8px) {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    &:not(:last-child) {
      margin: 0 10px 0 0;
    }

    @media screen and (min-width: 1023.8px) {
      padding: 10px;

      &:not(:last-child) {
        margin: 0;
      }
    }
  }
`;

export { ListItem, ListItemInfoBlock, ListItemFooter };
