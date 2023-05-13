import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'


const PagesLinks = ({ to, txtLink }) => {
  return (
    <Typography>
      <Link to={to}>{txtLink}</Link>
    </Typography>
  )
}

export default PagesLinks
