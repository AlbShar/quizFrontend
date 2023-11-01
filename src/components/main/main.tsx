import { ReactNode, CSSProperties } from 'react';

import { StyledMain } from './main.Styled';

type MainProps = {
  children: ReactNode;
  customStyle?: CSSProperties
};

export const Main = ({ children, customStyle }: MainProps) => {
  return <StyledMain style={customStyle}>{children}</StyledMain>;
};
