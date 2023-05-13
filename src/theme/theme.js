import { createTheme } from '@mui/material'

const COLOR = {
  PRIMARY: '#25d366',
  SECONDARY: '#ff385c',
  LIGHTER_BACKGROUND: '#fff',
  LIGHT_BACKGROUND: '#f7f7f9',
  LIGHT_SHADOW: '#f7f7f9',
  DARK_SHADOW: '#d9d9d9',
  BLACK: 'rgba(0, 0, 0, 0.87)',
  DARK_GRAY: 'rgba(0, 0, 0, 0.6)',
  LIGHT_GRAY: 'rgba(0, 0, 0, 0.38)'
}

export const themeAppartamentos = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: COLOR.LIGHTER_BACKGROUND,
      paper: COLOR.LIGHTER_BACKGROUND
    },
    primary: {
      main: COLOR.PRIMARY
    },
    secondary: {
      main: COLOR.SECONDARY
    },
    text: {
      primary: COLOR.BLACK,
      secondary: COLOR.DARK_GRAY,
      disabled: COLOR.DARK_GRAY
    },
    divider: COLOR.LIGHT_GRAY,
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.04)',
      selected: 'rgba(0, 0, 0, 0.08)',
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)'
    }
  },
  typography: {
    h1: {
      fontSize: '2rem',
      padding: '2.5rem 0.75rem'
    },
    h2: {
      fontSize: '1.75rem',
      padding: '1rem 0.50rem'
    }
  },
  components: {
    MuiButton: {
      defaultProps: {
        style: {
          textTransform: 'none',
          boxShadow: 'none',
          borderRadius: '0.5em'
        }
      }
    }
  }
})
