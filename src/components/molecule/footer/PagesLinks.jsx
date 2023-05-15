import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const PagesLinks = ({ to, txtLink }) => {
  return (
    <Typography>
      <Link to={to} style={styles.links}>
        {txtLink}
      </Link>
    </Typography>
  )
}

export default PagesLinks

const styles = {
  links: {
    backgroundColor: '#ff385c',
    padding: '0px 6px',
    borderRadius: '7px'
  }
}
