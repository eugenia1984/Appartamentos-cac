import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { COLOR } from '../../../theme/theme'

const Copyright = () => {
  const year = new Date().getFullYear()

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 500,
        padding: '1.5rem 0.75rem',
        margin: '0 auto'
      }}
    >
      <Typography color={COLOR.WHITE} align="center">
        Copyright &copy; {year} - Todos los derechos reservados
      </Typography>
    </Box>
  )
}

export default Copyright
