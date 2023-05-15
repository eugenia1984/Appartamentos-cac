import { Box, List, ListItem } from '@mui/material'
import Headline from '../../components/atom/headline/Headline'
import { TEXT_TERM_CONDITIONS } from './text'
import { COLOR } from '../../theme/theme'

const TermsAndConditions = () => {
  return (
    <section id="terminos-condiciones">
      <Headline title="Términos y condiciones" />
      <Box sx={styles.termsSection}>
        <List
          aria-labelledby="list-of-terms-and-conditions"
          sx={styles.list}
        >
          {TEXT_TERM_CONDITIONS.map((condition) => {
            return (
              <ListItem key={condition.id}>
                {condition.id}- {condition.condition}
              </ListItem>
            )
          })}
        </List>
      </Box>
    </section>
  )
}

export default TermsAndConditions

const styles = {
  termsSection: {
    background: `${COLOR.LIGHT_BACKGROUND}`,
    width: '100%',
    margin: '0 auto 5rem',
    padding: '2rem 2rem 5rem 2rem'
  },
  list: {
    maxWidth: '890px',
    margin: '0 auto'
  }
}
