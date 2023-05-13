import { MenuItem, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { LOGIN_LINK_MENU } from '../../../models/routes'

const Loginlinks = ({ handleCloseUserMenu }) => {
  return (
    <>
      {LOGIN_LINK_MENU.map((setting) => (
        <MenuItem key={setting.to} onClick={handleCloseUserMenu}>
          <Typography textAlign="center">
            <Link to={setting.to}>{setting.text}</Link>
          </Typography>
        </MenuItem>
      ))}
    </>
  )
}

export default Loginlinks
