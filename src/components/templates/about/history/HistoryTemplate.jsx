import { Box, Typography } from '@mui/material'
import { TEXT_ABOUT } from './text'
import './HistoryTemplate.css'
import { COLOR } from '../../../../theme/theme'

const HistoryTemplate = () => {
  return (
    <section id="history-bg">
      <Box
        sx={{
          width: '100%',
          maxWidth: '890px',
          margin: '1rem auto'
        }}
      >
        {TEXT_ABOUT.map((text) => (
          <Typography
            key={text.id}
            sx={styles.text}
          >
            {text.text}
          </Typography>
        ))}
      </Box>
    </section>
  )
}

export default HistoryTemplate

const styles = {
  text: {
    padding: '1rem 2rem 1rem 2rem',
    lineHeight: '1.8',
    color: `${COLOR.WHITE}`,
    backgroundColor: '#00000090',

  }
}
