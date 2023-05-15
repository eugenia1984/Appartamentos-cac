import { Link } from 'react-router-dom'
import { Typography } from '@mui/material'
import YouTubeIcon from '../../atom/icons/YouTubeIcon'
import InstagramIcon from '../../atom/icons/InstagramIcon'
import { publicRoutes } from '../../../models/routes'
import { COLOR } from '../../../theme/theme'

const SocialMedia = () => {
  return (
    <Typography color={COLOR.WHITE}>
      Social Media: 
      <Link to={publicRoutes.HOME} style={{ margin: '0px 12px'}}>
        <YouTubeIcon width={32} height={32} />
      </Link>
      <Link to={publicRoutes.HOME}>
      <InstagramIcon width={32} height={32} />
      </Link>
    </Typography>
  )
}

export default SocialMedia
