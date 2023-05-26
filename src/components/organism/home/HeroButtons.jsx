import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup
} from '@mui/material'
import { useEffect, useState } from 'react'
import { HOME_LABELS } from '../../../utils/constants'

const HeroButtons = ({ housingType }) => {
  // Dejo seteado por default casas - venta
  const [option, setOption] = useState('MLA1468')

  const handleChange = (event) => {
    setOption(event.target.value)
  }

  // TODO: useEffect para ver que se setea la opcion del select. Cuando este ok BORRAR
  useEffect(() => {
    console.log('option: ', option, 'housingType: ', housingType)
  }, [housingType])

  return (
    <>
      <Grid item xs={12}>
        <FormControl>
          <FormLabel id="buttons-group">Seleccione una opción:</FormLabel>
          <RadioGroup
            row
            aria-labelledby="Seleccione una opcion"
            name="buttons-group"
            value={option}
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
