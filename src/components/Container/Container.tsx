import { CSSProperties } from 'react';

import { ContainerStyled } from './Container.styled';

type ContainerProps = {
  children: React.ReactNode;
  style?: CSSProperties
};

const Container = ({ children, style }: ContainerProps): JSX.Element => {
  return <ContainerStyled style={style}>{children}</ContainerStyled>;
};

export default Container;
