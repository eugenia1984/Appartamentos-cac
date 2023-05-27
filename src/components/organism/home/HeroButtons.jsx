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
  const [optionsToDisplay, setOptionsToDisplay] = useState([
    {
      id: 'MLA1467',
      type: 'Alquiler'
    },
    {
      id: 'MLA50278',
      type: 'Alquiler temporario'
    },
    {
      id: 'MLA1468',
      type: 'Venta'
    }
  ])

  const handleChange = (event) => {
    setOption(event.target.value)
    console.log('option en handleChange: ', option)
  }

  // TODO: useEffect para ver que se setea la opcion del select. Cuando este ok BORRAR
  useEffect(() => {
    setOptionsToDisplay(HOME_LABELS.find((el) => el.id === housingType).options)
    console.log('housingType: ', housingType)
  }, [housingType])

  // TODO: useEffect para ver que se setea optionsToDisplay. Cuando este ok BORRAR
  useEffect(() => {
    console.log('optionsToDisplay: ', optionsToDisplay, 'option: ', option)
  }, [optionsToDisplay])

  //TODO: falta que se setee bien options
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
            {HOME_LABELS.find((el) => el.id === housingType).options.map(
              (el) => (
                <FormControlLabel
                  key={el.id}
                  value={el.id}
                  control={<Radio />}
                  label={el.type}
                />
              )
            )}
          </RadioGroup>
        </FormControl>
      </Grid>
    </>
  )
}

export default HeroButtons
