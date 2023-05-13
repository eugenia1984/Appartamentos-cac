import Grid from '@mui/material/Grid'
import Copyright from '../../molecule/footer/Copyright'
import PagesLinks from '../../molecule/footer/PagesLinks'
import SocialMedia from '../../molecule/footer/SocialMedia'
import { publicRoutes } from '../../../models/routes'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <Grid container spacing={{ xs: 1, md: 2 }} >
        <Grid item xs={12} md={4}>
          <PagesLinks to={publicRoutes.SEARCH} txtLink="Buscar" />
          <PagesLinks
            to={publicRoutes.ABOUT_US}
            txtLink="Quienes somos"
          />
          <PagesLinks
            to={publicRoutes.CONTACT}
            txtLink="Contacto"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <PagesLinks
            to={publicRoutes.TERMS_CONDITIONS}
            txtLink="Términos y condiciones"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <SocialMedia />
        </Grid>
      </Grid>
      <Copyright />
    </footer>
  )
}

export default Footer
