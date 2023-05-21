import { Grid } from '@mui/material'
import Headline from '../../../atom/headline/Headline'
import { COLOR } from '../../../../theme/theme'
import SuggestedSearchList from '../../../organism/home/SuggestedSearchList'

const SuggestedSearchTemplate = () => {
  return (
    <section>
      <Grid container sx={styles.suggestions}>
        <Headline title="Búsquedas sugeridas" variant="h2" />
        <SuggestedSearchList />
      </Grid>
    </section>
  )
}

export default SuggestedSearchTemplate

const styles = {
  suggestions: {
    background: `${COLOR.LIGHT_BACKGROUND}`,
    padding: '2rem',
    marginBottom: '5rem'
  }
}
