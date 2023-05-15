import { Box, Paper, Typography } from '@mui/material'
import Headline from '../../atom/headline/Headline'

const ItemCarousel = ({ item }) => {
  const { fullName, telephone, srcImg } = item

  return (
    <Box sx={{ width: '80%', margin: '0 auto', maxWidth: '500px' }}>
      <Paper elevation={3} sx={{ paddingTop: '24px' }}>
        <Headline variant="h3" title={fullName} />
        <img
          src={srcImg}
          alt={fullName}
          style={{ width: '200px', margin: '0 150px', borderRadius: '50%' }}
        />
        <Typography align="center" paddingBottom={2}>
          {telephone}
        </Typography>
      </Paper>
    </Box>
  )
}

export default ItemCarousel
