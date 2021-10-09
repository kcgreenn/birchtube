import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';
let theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      light: '#62727b',
      main: '#37474f',
      dark: '#102027',
      contrastText: '#fff'
    },
    secondary: {
      light: '#ffc947',
      main: '#ff9800',
      dark: '#c66900',
      contrastText: '#000'
    }
  },
  typography: {
    fontFamily: [
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(','),
    h1: {
      fontSize: '5rem'
    },
    h2: {
      fontSize: '4rem'
    },
    h3: {
      fontSize: '3rem'
    },
    h4: {
      fontSize: '2rem'
    },
    h5: {
      fontSize: '1.5rem'
    },
    h6: {
      fontSize: '0.5rem'
    },
    body1: {
      fontSize: '1rem'
    },
    body2: {
      fontSize: '0.75rem'
    }
  }
});
theme = responsiveFontSizes(theme);

export default theme;
