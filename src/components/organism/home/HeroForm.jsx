import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from '@mui/material'
import { useState } from 'react'

const HeroForm = () => {
  const [searchSelected, setSearchSelected] = useState('')

  const handleChange = (event) => {
    setSearchSelected(event.target.value)
  }

  return (
    <>
      <Grid item xs={12} md={5}>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Tipo de vivienda
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={searchSelected}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Casa</MenuItem>
              <MenuItem value={20}>Departamento</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Grid>
      <Grid item xs={12} md={5}>
        <TextField
          id="standard-basic"
          label="Ingresa la ubicación..."
          variant="standard"
        />
      </Grid>
      <Grid item xs={12} md={2}>
        <Button variant="contained">Buscar</Button>
      </Grid>
    </>
  )
}
export default HeroForm
