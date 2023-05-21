import { Button, Grid } from "@mui/material"

const HeroButtons = () => {
  return (
    <>
      <Grid item xs={4}>
        <Button>Venta</Button>
      </Grid>
      <Grid item xs={4}>
        <Button>Alquiler</Button>
      </Grid>
      <Grid item xs={4}>
        <Button>Alquiler temporal</Button>
      </Grid>
    </>
  )
}

export default HeroButtons
