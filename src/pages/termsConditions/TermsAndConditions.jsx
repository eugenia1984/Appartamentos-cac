import { Box, List, ListItem } from '@mui/material'
import Headline from '../../components/atom/headline/Headline'
import { TEXT_TERM_CONDITIONS } from './text'

const TermsAndConditions = () => {
  return (
    <section id="terminos-condiciones">
      <Headline title="Términos y condiciones" />
      <Box sx={{ width: '100%', maxWidth: '980px', margin: '0 auto',padding: '0rem 2rem 5rem 2rem' }}>
        <List aria-labelledby="list-of-terms-and-conditions">
          {TEXT_TERM_CONDITIONS.map((condition) => {
            return <ListItem key={condition.id}>{condition.id}- {condition.condition}</ListItem>
          })}
        </List>
      </Box>
    </section>
  )
}

export default TermsAndConditions
