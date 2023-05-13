import { MenuItem, Typography } from '@mui/material'
import { PAGES_LINK_MENU } from '../../../models/routes'
import { Link } from 'react-router-dom'

const NavBarLinks = ({ handleCloseNavMenu }) => {
  return (
    <>
      {PAGES_LINK_MENU.map((page) => (
        <MenuItem key={page.text} onClick={handleCloseNavMenu}>
          <Typography textAlign="center">
            <Link to={page.to}>{page.text}</Link>
          </Typography>
        </MenuItem>
      ))}
    </>
  )
}

export default NavBarLinks
