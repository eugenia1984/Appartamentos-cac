import { createTheme } from '@mui/material'

const COLOR = {
  PRIMARY: '#25d366',
  SECONDARY: '#ff385c',
  LIGHT_SHADOW: '#f7f7f9',
  DARK_SHADOW: '#d9d9d9'
}

export const themeAppartamentos = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: COLOR.PRIMARY
    },
    secondary: {
      main: COLOR.SECONDARY
    }
  },
  typography: {
    h1: {
      fontSize: '2rem',
      padding: '1.5rem 0.75rem'
    },
    h2: {
      fontSize: '1.75rem',
      padding: '1rem 0.50rem'
    }
  }
})
