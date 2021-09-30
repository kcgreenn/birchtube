import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#6288d5'
    },
    secondary: {
      main: '#ff9100'
    }
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(','),
    h1: {
      fontSize: '3rem'
    },
    h2: {
      fontSize: '2rem'
    },
    h3: {
      fontSize: '1.5rem'
    },
    h4: {
      fontSize: '1.25rem'
    },
    h5: {
      fontSize: '1rem'
    },
    h6: {
      fontSize: '0.5rem'
    }
  }
});
theme = responsiveFontSizes(theme);

export default theme;
