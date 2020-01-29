import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  typography: {
    fontFamily: ['Arial'].join(','),
    h2: {
      fontSize: '2.5rem',
      color: 'white'
    },
    body1: {
      color: 'white',
      fontSize: '1.5rem'
    },
    body2: {
      color: 'white',
      fontSize: '1.8rem'
    },
    button: {
      fontWeight: '600',
      color: 'black',
      fontSize: '1.5rem'
    }
  }
});
