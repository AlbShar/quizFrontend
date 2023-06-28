import { ContainerStyled } from './Container.styled';

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps): JSX.Element => {
  return <ContainerStyled>{children}</ContainerStyled>;
};

export default Container;
