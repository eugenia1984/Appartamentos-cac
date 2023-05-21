import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  TextField
} from '@mui/material'
import { useState } from 'react'
import { COLOR } from '../../../theme/theme'

const ContactForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [telephone, setTelephone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  return (
    <>
      <Box
        sx={{
          width: 500,
          margin: '1rem auto',
          maxWidth: '100%'
        }}
      >
        <form style={styles.contactFormStyles}>
          <FormControl variant="standard" fullWidth>
            <InputLabel htmlFor="first-name">Nombre</InputLabel>
            <Input
              id="first-name"
              defaultValue={firstName}
              required
              onChange={(event) => {
                setFirstName(event.target.value)
              }}
              aria-describedby="Ingresa tu nombre"
            />
            <FormHelperText id="first-name-helper-text">
              Ingresa tu nombre
            </FormHelperText>
          </FormControl>
          <FormControl variant="standard" fullWidth>
            <InputLabel htmlFor="last-name">Apellido</InputLabel>
            <Input
              id="last-name"
              defaultValue={lastName}
              required
              onChange={(event) => {
                setLastName(event.target.value)
              }}
              aria-describedby="Ingresa tu apellido"
            />
            <FormHelperText id="last-name-helper-text">
              Ingresa tu apellido
            </FormHelperText>
          </FormControl>
          <FormControl variant="standard" fullWidth>
            <InputLabel htmlFor="telephone">Telefono</InputLabel>
            <Input
              id="telephone"
              defaultValue={telephone}
              required
              onChange={(event) => {
                setTelephone(event.target.value)
              }}
              aria-describedby="Ingresa tu número de teléfono"
            />
            <FormHelperText id="telephone-helper-text">
              Ingresa tu número de teléfono
            </FormHelperText>
          </FormControl>
          <FormControl variant="standard" fullWidth>
            <InputLabel htmlFor="email">Correo electrónico</InputLabel>
            <Input
              id="email"
              defaultValue={email}
              required
              onChange={(event) => {
                setEmail(event.target.value)
              }}
              aria-describedby="Ingresa tu correo electrónico"
            />
            <FormHelperText id="email-helper-text">
              Ingresa tu correo electrónico
            </FormHelperText>
          </FormControl>
          <TextField
            required
            id="massage"
            label="Mensaje"
            multiline
            rows={4}
            value={message}
            onChange={(event) => {
              setMessage(event.target.value)
            }}
            variant="standard"
            fullWidth
            margin="dense"
          />
          <Button variant="contained" size="large" color="secondary">
            Enviar
          </Button>
        </form>
      </Box>
    </>
  )
}

export default ContactForm

const styles = {
  contactFormStyles: {
    with: '100%',
    backgroundColor: `${COLOR.LIGHTER_BACKGROUND}`,
    padding: '1rem 1.5rem 3rem',
    marginTop: '2rem',
    borderRadius: '14px'
  }
}
