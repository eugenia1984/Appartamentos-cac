import { useEffect, useState } from 'react'
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
  // Lo dejo seteado para casas como default
  const [housingType, setHousingType] = useState('MLA1466')

  const handleChange = (event) => {
    setHousingType(event.target.value)
  }

  return (
    <>
      <form style={style.form}>
        <Grid item xs={12}>
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
                  <MenuItem key={el.id} value={el.id}>
                    {el.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Grid>
        <HeroButtons housingType={housingType} />
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
