
import YouTubeIcon from '@mui/icons-material/YouTube'
import { Grid } from '@mui/material'

/*
 * By default the color is primary and the fontSize is medium
 * If you ant to customized, can pass values as props
 */
const YouTube = ({ xs, color, fonstSize }) => {
  return (
    <Grid item xs={xs}>
      <YouTubeIcon
        color={color ? color : 'primary'}
        fonstSize={fonstSize ? fonstSize : 'medium'}
      />
    </Grid>
  )
}

export default YouTube
