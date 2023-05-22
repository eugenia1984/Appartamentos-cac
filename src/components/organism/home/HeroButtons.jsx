import { Button, Grid } from '@mui/material'

const HeroButtons = () => {
  return (
    <>
      <Grid item xs={4}>
        <Button variant="outlined">Venta</Button>
      </Grid>
      <Grid item xs={4}>
        <Button variant="outlined">Alquiler</Button>
      </Grid>
      <Grid item xs={4}>
        <Button variant="outlined">Alquiler temporal</Button>
      </Grid>
    </>
  )
}

export default HeroButtons
