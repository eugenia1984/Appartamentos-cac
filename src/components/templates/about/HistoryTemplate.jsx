import { Box, Typography } from '@mui/material'
import { TEXT_ABOUT } from './text'
import './AgentsTemplate'

const HistoryTemplate = () => {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 890,
        margin: '1rem auto',
        padding: '1.5rem 0.75rem 3rem'
      }}
      id="history-bg"
    >
      {TEXT_ABOUT.map((text) => (
        <Typography
          key={text.id}
          sx={{ padding: '0rem 2rem 1rem 2rem', lineHeight: '1.8' }}
        >
          {text.text}
        </Typography>
      ))}
    </Box>
  )
}

export default HistoryTemplate
