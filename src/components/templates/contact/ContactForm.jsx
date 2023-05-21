import { Box, FormControl, Input, InputLabel } from '@mui/material'
import { useEffect, useState } from 'react'
import { COLOR } from '../../../theme/theme'
import { useForm } from 'react-hook-form'
import { ERROR_MESSAGES, REQUIRED } from '../../../utils/constants'
import { PATTERNS } from '../../../utils/patterns'
import './ContactForm.css'

const ContactForm = () => {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit
  } = useForm()

  const [userInfo, setUserInfo] = useState({
    firstname: '',
    lastName: '',
    email: '',
    telephone: '',
    message: ''
  })
  const { firstName, lastName, email, telephone, message } = userInfo

  useEffect(() => {
    const subscription = watch((data) => {
      console.log('nombre: ', data.firstName)
      console.log('apellido: ', data.lastName)
      console.log('correo: ', data.email)
      console.log('telefono: ', data.telephone)
      console.log('mensaje: ', data.message)
    })
    return () => subscription.unsubscribe()
  }, [watch])

  const handleChange = (event) => {
    const { name, value } = event.target
    setUserInfo({ ...userInfo, [name]: value })
    console.log('userInfo en handleChange', userInfo)
  }

  const onSubmit = (userInfo) => console.log('userInfo: ', userInfo)

  return (
    <>
      <Box
        sx={{
          width: 500,
          margin: '1rem auto',
          maxWidth: '100%'
        }}
      >
        <form
          style={styles.contactFormStyles}
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormControl variant="standard" fullWidth>
            <InputLabel htmlFor="firstName">Nombre</InputLabel>
            <Input
              id="firstName"
              value={firstName}
              required
              onChange={handleChange}
              placeholder="Ingresa tu nombre"
              type="text"
              name="firstName"
              {...register('firstName', {
                required: REQUIRED.fistName,
                pattern: {
                  value: PATTERNS.name,
                  message: ERROR_MESSAGES.fistName
                }
              })}
            />
            {errors.firstName && <p>{errors.firstName.message}</p>}
          </FormControl>
          <FormControl variant="standard" fullWidth>
            <InputLabel htmlFor="last-name">Apellido</InputLabel>
            <Input
              id="last-name"
              value={lastName}
              required
              onChange={handleChange}
              placeholder="Ingresa tu apellido"
              type="text"
              name="lastName"
              {...register('lastName', {
                required: REQUIRED.lastName,
                pattern: {
                  value: PATTERNS.name,
                  message: ERROR_MESSAGES.lastName
                }
              })}
            />
            {errors.lastName && <p>{errors.lastName.message}</p>}
          </FormControl>
          <FormControl variant="standard" fullWidth>
            <InputLabel htmlFor="telephone">Telefono</InputLabel>
            <Input
              id="telephone"
              value={telephone}
              required
              onChange={handleChange}
              placeholder="Ingresa tu número de teléfono"
              type="number"
              name="telephone"
              {...register('telephone', {
                required: REQUIRED.telephone,
                pattern: {
                  value: PATTERNS.telephone,
                  message: ERROR_MESSAGES.telephone
                }
              })}
            />
            {errors.telephone && <p>{errors.telephone.message}</p>}
          </FormControl>
          <FormControl variant="standard" fullWidth>
            <InputLabel htmlFor="email">Correo electrónico</InputLabel>
            <Input
              id="email"
              value={email}
              required
              onChange={handleChange}
              placeholder="Ingresa tu correo electrónico"
              type="email"
              name="email"
              {...register('email', {
                required: REQUIRED.email,
                pattern: {
                  value: PATTERNS.email,
                  message: ERROR_MESSAGES.email
                }
              })}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </FormControl>
          <FormControl variant="standard" fullWidth>
            <InputLabel htmlFor="message">Mensaje</InputLabel>
            <Input
              id="message"
              value={message}
              required
              onChange={handleChange}
              placeholder="Ingresa tu mensaje"
              type="text"
              name="message"
              {...register('message', {
                required: REQUIRED.message,
                pattern: {
                  value: PATTERNS.name,
                  message: ERROR_MESSAGES.email
                }
              })}
            />
            {errors.message && <p>{errors.message.message}</p>}
          </FormControl>
          <input type="submit" value="Enviar" className="btn-send"/>
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
