import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Copyright from '../../molecule/Copyright'
import PagesLinks from '../../molecule/PagesLinks'
import SocialMedia from '../../molecule/SocialMedia'

const Footer = () => {
  return (
    <footer>
      <Container maxWidht="lg" />
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 4 }}>
        <Grid item xs={12} md={4}>
          <PagesLinks />
        </Grid>
        <Grid item xs={12} md={4}>
          <PagesLinks />
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
