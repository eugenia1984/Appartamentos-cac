import { Box, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { PAGES_LINK_MENU } from '../../../models/routes'

const NavBarLinkButtons = ({ handleCloseNavMenu }) => {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      {PAGES_LINK_MENU.map((page) => (
        <Button
          key={page.to}
          onClick={handleCloseNavMenu}
          sx={{ my: 2, color: 'white', display: 'block' }}
        >
          <Link to={page.to}>{page.text}</Link>
        </Button>
      ))}
    </Box>
  )
}

export default NavBarLinkButtons
