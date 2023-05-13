import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const Copyright = () => {
  const year = new Date().getFullYear()

  return (
    <Box sx={{ width: '100%', maxWidth: 500, padding: '1.5rem 0.75rem' }}>
      <Typography>Copyright &copy; {year} - Todos los derechos reservados</Typography>
    </Box>
  )
}

export default Copyright
