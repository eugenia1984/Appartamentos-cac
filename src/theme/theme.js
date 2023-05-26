import { createTheme } from '@mui/material'

export const COLOR = {
  PRIMARY: '#25d366',
  SECONDARY: '#ff385c',
  LIGHTER_BACKGROUND: '#fff',
  LIGHT_BACKGROUND: '#f7f7f9',
  LIGHT_SHADOW: '#f7f7f9',
  DARK_SHADOW: '#d9d9d9',
  BLACK: 'rgba(0, 0, 0, 0.87)',
  WHITE: '#fff',
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
      padding: '3.5rem 0.75rem 2.5rem',
      fontWeight: '800'
    },
    h2: {
      fontSize: '1.75rem',
      padding: '1rem 0.50rem',
      fontWeight: '600'
    },
    h3: {
      fontSize: '1.25rem',
      padding: '1rem 0.50rem',
      fontWeight: '400'
    }
  },
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
          margin: '0.75rem 0rem',
          padding: '0.25rem 0rem'
        }
      }
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true
      },
      styleOverrides: {
        root: {
          borderRadius: '7px',
          fontStyle: 'normal',
          fontSize: '16px',
          padding: '8px 16px'
        },
        text: {
          '&.Mui-focusVisible': {
            backgroundColor: '#ff385c'
          },
          ':hover': {
            backgroundColor: '#BFBFBF'
          }
        },
        outlined: {
          border: '2px solid #ff385c',
          color: '#ff385c',
          ':hover': {
            color: '#fff',
            border: '2px solid #ff385c',
            background: '#ff385c'
          },
          ':focus': {
            color: 'white',
            background: '#ff385c'
          },
          '&.Mui-disabled': {
            border: '2px solid #8F9193',
            color: '#8F9193'
          }
        },
        containedPrimary: {
          color: '#fff',
          background: '#ff385c',
          ':hover': {
            backgroundColor:
              '#25d366'
          },
          ':focus': {
            backgroundColor: '#cf2d4b'
          },
          '&.Mui-disabled': {
            background: '#8F9193',
            color: 'white'
          }
        }
      }
    },
    MuiTextField: {
      defaultProps: {
        variant: 'filled'
      },
      styleOverrides: {
        root: {
          input: {
            '&[type=number]': {
              MozAppearance: 'textfield'
            },
            '&::-webkit-outer-spin-button': {
              WebkitAppearance: 'none',
              margin: 0
            },
            '&::-webkit-inner-spin-button': {
              WebkitAppearance: 'none',
              margin: 0
            }
          }
        }
      }
    },
    MuiInput: {
      styleOverrides: {
        root: {
          border: '1px solid #ff385c',
          borderRadius: '7px',
          padding: '0.25rem 0.50rem',
          marginTop: '12px'
        }
      }
    },
    MuiInputLabel: {
      defaultProps: {
        shrink: true
      },
      styleOverrides: {
        root: {
          color: 'rgba(0, 0, 0, 0.8)',
          fontWeight: '800',
          '&.Mui-error': {
            color: 'black'
          },
          '&.Mui-focused': {
            color: 'black'
          }
        }
      }
    },
    MuiFilledInput: {
      defaultProps: {
        disableUnderline: true,
        size: 'small'
      },
      styleOverrides: {
        root: ({ theme }) => ({
          border: '2px solid #C7C8C8',
          overflow: 'hidden',
          backgroundColor: '#FFFFFF',
          borderRadius: 16,
          transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow'
          ]),
          ':hover': {
            backgroundColor: '#FFFFFF'
          },
          '&.Mui-error': {
            borderColor: '#CD1812'
          }
        })
      }
    },
    MuiSelect: {
      defaultProps: {
        variant: 'filled'
      },
      styleOverrides: {
        root: {
          margin: '12px 6px'
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontFamily: 'Nunito, sans-serif',
          fontWeight: 600,
          fontSize: '15px',
          lineHeight: '21px',
          color: '#202327',
          textAlign: 'left',
          borderBottom: 'none'
        },
        head: {
          color: '#555555',
          fontSize: '13px',
          lineHeight: '15px',
          fontFamily: 'Nunito Sans, sans-serif'
        }
      }
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          ':nth-of-type(odd)': {
            background: 'rgba(231,233,247,0.4)'
          }
        },
        head: {
          backgroundColor: '#fff !important'
        }
      }
    },
    MuiSwitch: {
      styleOverrides: {
        root: ({ theme }) => ({
          width: 32,
          height: 18,
          padding: 0,
          display: 'flex',
          ':active': {
            '& .MuiSwitch-thumb': {
              width: 15
            }
          },
          '& .MuiSwitch-switchBase.Mui-checked': {
            transform: 'translateX(14px) !important'
          },
          '& .MuiSwitch-switchBase': {
            padding: 2,
            '&.Mui-checked': {
              transform: 'translateX(12px)',
              color: '#fff',
              '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.primary.main
              }
            }
          },
          '& .Mui-focusVisible': {
            backgroundColor: '#1226AA',
            color: '#F1F2FA'
          },
          '& .Mui-checked.Mui-focusVisible': {
            backgroundColor: 'black',
            color: 'white'
          },
          '& .MuiSwitch-thumb': {
            boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
            width: 14,
            height: 14,
            borderRadius: 6,
            transition: theme.transitions.create(['width'], {
              duration: 200
            })
          },
          '& .MuiSwitch-track': {
            borderRadius: 16 / 2,
            opacity: 1,
            backgroundColor:
              theme.palette.mode === 'dark'
                ? 'rgba(255,255,255,.35)'
                : 'rgba(0,0,0,.25)',
            boxSizing: 'border-box',
            '.Mui-checked.Mui-checked + &': {
              // Controls checked color for the track
              opacity: 0.1,
              backgroundColor: '#fff'
            }
          }
        })
      }
    }
  }
})
