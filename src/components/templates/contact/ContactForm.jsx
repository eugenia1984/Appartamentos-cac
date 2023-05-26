import { Box, FormControl, Input, InputLabel, Typography } from '@mui/material'
import { COLOR } from '../../../theme/theme'
import { useForm } from '../../../hooks/useForm'
import { validationsForm } from '../../../helper/validationsForm'
import { Loader } from '../../atom/loader/Loader'
import { Message } from '../../atom/message/Message'
import './ContactForm.css'

const initialForm = {
  firstname: '',
  lastName: '',
  email: '',
  telephone: '',
  subject: '',
  message: ''
}

const ContactForm = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit
  } = useForm(initialForm, validationsForm)

  const { firstName, lastName, email, telephone, subject, message } = form

  return (
    <>
      <Box
        sx={{
          width: 500,
          margin: '1rem auto',
          maxWidth: '100%'
        }}
      >
        <form style={styles.contactFormStyles} onSubmit={handleSubmit}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="firstName">Nombre</InputLabel>
            <Input
              id="firstName"
              type="text"
              name="firstName"
              placeholder="Ingresa tu nombre"
              onBlur={handleBlur}
              onChange={handleChange}
              value={firstName}
              required
            />
            {errors.firstName && (
              <Typography color="#dc3545">{errors.firstName}</Typography>
            )}
          </FormControl>
          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="lastName">Apellido</InputLabel>
            <Input
              id="lastName"
              type="text"
              name="lastName"
              placeholder="Ingresa tu apellido"
              onBlur={handleBlur}
              onChange={handleChange}
              value={lastName}
              required
            />
            {errors.lastName && (
              <Typography color="#dc3545">{errors.lastName}</Typography>
            )}
          </FormControl>
          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="telephone">Telefono</InputLabel>
            <Input
              id="telephone"
              type="text"
              name="telephone"
              placeholder="Ingresa tu número de teléfono"
              onBlur={handleBlur}
              onChange={handleChange}
              value={telephone}
              required
            />
            {errors.telephone && (
              <Typography color="#dc3545">{errors.telephone}</Typography>
            )}
          </FormControl>
          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="email">Correo electrónico</InputLabel>
            <Input
              id="email"
              name="email"
              placeholder="Ingresa tu correo electrónico"
              onBlur={handleBlur}
              onChange={handleChange}
              value={email}
            />
            {errors.email && (
              <Typography color="#dc3545">{errors.email}</Typography>
            )}
          </FormControl>
          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="subject">Asunto</InputLabel>
            <Input
              multiline
              id="subject"
              name="subject"
              placeholder="Ingresa tu asunto"
              onBlur={handleBlur}
              onChange={handleChange}
              value={subject}
              required
            />
            {errors.subject && (
              <Typography color="#dc3545">{errors.subject}</Typography>
            )}
          </FormControl>
          <FormControl
            variant="outlined"
            fullWidth
          >
            <InputLabel htmlFor="message">Mensaje</InputLabel>
            <Input
              multiline 
              id="message"
              name="message"
              type="text"
              placeholder="Ingresa tu mensaje"
              onBlur={handleBlur}
              onChange={handleChange}
              value={message}
              required
            />
            {errors.message && (
              <Typography color="#dc3545">{errors.message}</Typography>
            )}
          </FormControl>
          <input type="submit" value="Enviar" className="btn-send" />
        </form>
        {loading && <Loader />}
        {response && (
          <Message
            msg="La información se ha enviado correctamente"
            bgColor="#198754"
          />
        )}
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
