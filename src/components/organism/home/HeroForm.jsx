import { useState } from 'react'
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select
} from '@mui/material'
import HeroButtons from './HeroButtons'
import { HOUSING_TYPES } from '../../../utils/constants.js'

const HeroForm = () => {
  const [housingType, setHousingType] = useState('')
  const [location, setLocation] = useState('')

  const handleChange = (event) => {
    setHousingType(event.target.value)
    setLocation(event.target.value)
  }

  return (
    <>
      <form style={style.form}>
        <HeroButtons />
        <Grid item xs={12} md={6}>
          <Box sx={{ minWidth: 200 }}>
            <FormControl fullWidth>
              <InputLabel id="housing-type">Tipo de vivienda</InputLabel>
              <Select
                labelId="housing-type"
                id="housing-type"
                value={housingType}
                label="Housing type"
                onChange={handleChange}
              >
                {HOUSING_TYPES.map((el) => (
                  <MenuItem key={el.id} value={el.id}>{el.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ minWidth: 200 }}>
            <FormControl fullWidth>
              <InputLabel id="location">Ubicación</InputLabel>
              <Select
                labelId="location"
                id="location"
                value={location}
                label="Location"
                onChange={handleChange}
              >
                <MenuItem value={1}>CABA</MenuItem>
                <MenuItem value={2}>Buenos Aires</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
        <Grid item xs={12} md={2}>
          <Button variant="contained">Buscar</Button>
        </Grid>
      </form>
    </>
  )
}
export default HeroForm

const style = {
  form: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
}
