import { ERROR_MESSAGES, REQUIRED } from '../utils/constants'

export const validationsForm = (form) => {
  let errors = {}
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/
  let regexPhone = /^[0-9]+$/
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/
  let regexComments = /^.{1,255}$/

  if (!form.firstName.trim()) {
    errors.firstName = `${REQUIRED.fistName}`
  } else if (!regexName.test(form.firstName.trim())) {
    errors.firstname = `${ERROR_MESSAGES.fistName}`
  }

  if (!form.lastName.trim()) {
    errors.lastname = `${REQUIRED.lastName}`
  } else if (!regexName.test(form.lastName.trim())) {
    errors.lastname = `${ERROR_MESSAGES.lastName}`
  }

  if (!form.telephone.trim()) {
    errors.telephone = `${REQUIRED.telephone}`
  } else if (!regexPhone.test(form.telephone.trim())) {
    errors.telephone = `${ERROR_MESSAGES.telephone}`
  }

  if (!form.email.trim()) {
    errors.email = `${REQUIRED.email}`
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = `${ERROR_MESSAGES.email}`
  }

  if (!form.subject.trim()) {
    errors.subject = `${REQUIRED.subject}`
  }

  if (!form.message.trim()) {
    errors.message = `${REQUIRED.message}`
  } else if (!regexComments.test(form.message.trim())) {
    errors.message = `${ERROR_MESSAGES.message}`
  }

  return errors
}
