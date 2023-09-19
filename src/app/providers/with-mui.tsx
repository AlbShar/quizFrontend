import { ThemeProvider, createTheme } from '@mui/material/styles';

export const withMUi = (Component: () => JSX.Element) => () => {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 320,
        sm: 459.8,
        md: 767.8,
        lg: 1023.8,
        xl: 1299.8,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Component />
    </ThemeProvider>
  );
};
