import { Grid } from '@mui/material'
import Headline from '../../components/atom/headline/Headline'
import { COLOR } from '../../theme/theme'
import ContactForm from '../../components/templates/contact/ContactForm'

const Contact = () => {
  const text =
    'Para comunicarte con Appartamentos completá el formulario o llamanos al 0810-111-2222'

  return (
    <main>
      <section>
        <Headline title="Contactanos" />
      </section>
      <section style={styles.contactForm}>
        <Grid container sx={styles.containerForm}>
          <Headline title={text} variant="h3" color="#000" />
          <ContactForm />
        </Grid>
      </section>
    </main>
  )
}

export default Contact

const styles = {
  contactForm: {
    background: `${COLOR.LIGHT_BACKGROUND}`,
    padding: '2rem',
    marginBottom: '5rem'
  },
  containerForm: {
    padding: '0rem 1rem 5rem',
    justifyContent: 'center'
  }
}
