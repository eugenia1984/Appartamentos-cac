import { Link } from 'react-router-dom'
import { Typography } from '@mui/material'
import YouTubeIcon from '../../atom/icons/YouTubeIcon'
import InstagramIcon from '../../atom/icons/InstagramIcon'
import { publicRoutes } from '../../../models/routes'

const SocialMedia = () => {
  return (
    <Typography color="white">
      Social Media: <br />
      <Link to={publicRoutes.HOME}>
        <YouTubeIcon width={32} height={32} />
      </Link>
      <Link to={publicRoutes.HOME}>
      <InstagramIcon width={32} height={32} />
      </Link>
    </Typography>
  )
}

export default SocialMedia
