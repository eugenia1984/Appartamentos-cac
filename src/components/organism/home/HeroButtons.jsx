import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup
} from '@mui/material'
import { useState } from 'react'
import { HOME_LABELS } from '../../../utils/constants'

const HeroButtons = () => {

  const [value, setValue] = useState('venta')

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <>
      <Grid item xs={12}>
        <FormControl>
          <FormLabel id="buttons-group">Seleccione una opción:</FormLabel>
          <RadioGroup
            row
            aria-labelledby="Seleccione una opcion"
            name="buttons-group"
            value={value}
            onChange={handleChange}
          >
            {HOME_LABELS.map((el) => (
              <FormControlLabel
                key={el.value}
                value={el.value}
                control={<Radio />}
                label={el.label}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Grid>
    </>
  )
}

export default HeroButtons
