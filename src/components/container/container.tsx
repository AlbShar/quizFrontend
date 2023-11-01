import { CSSProperties } from 'react';

import { ContainerStyled } from './container.Styles';

type ContainerProps = {
  children: React.ReactNode;
  style?: CSSProperties;
};

export const Container = ({ children, style }: ContainerProps): JSX.Element => {
  return <ContainerStyled style={style}>{children}</ContainerStyled>;
};
