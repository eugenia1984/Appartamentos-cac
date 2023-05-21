import { Grid } from '@mui/material'
import { SUGGESTED_LIST } from './suggested'
import SuggestedSearchItem from './SuggestedSearchItem'

const SuggestedSearchList = () => {
  return (
    <Grid container>
      <Grid item xs={12} sm={5}>
        {SUGGESTED_LIST &&
          SUGGESTED_LIST.map((item) => (
            <SuggestedSearchItem
              title={item.title}
              listItem={item.list}
              key={item.id}
            />
          ))}
      </Grid>
    </Grid>
  )
}

export default SuggestedSearchList
