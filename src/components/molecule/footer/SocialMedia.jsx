import { Link } from 'react-router-dom'
import { Typography } from '@mui/material'
import YouTubeIcon from '../../atom/icons/YouTubeIcon'
import InstagramIcon from '../../atom/icons/InstagramIcon'
import { publicRoutes } from '../../../models/routes'
import { COLOR } from '../../../theme/theme'

const SocialMedia = () => {
  return (
    <Typography sx={styles.typography}>
      Seguinos: 
      <Link to={publicRoutes.HOME} style={styles.link}>
        <YouTubeIcon width={40} height={40} />
      </Link>
      <Link to={publicRoutes.HOME}>
        <InstagramIcon width={40} height={40} />
      </Link>
    </Typography>
  )
}

export default SocialMedia

const styles = {
  typography: {
    fontWeight: '900',
    fontSize: '1.25rem',
    color: `${COLOR.WHITE}`
  },
  link: {
    margin: '0px 12px'
  }
}
