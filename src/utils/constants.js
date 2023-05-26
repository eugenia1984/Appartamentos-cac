/****** Contact Us Form ******/
export const ERROR_MESSAGES = {
  fistName: "El campo 'nombre' solo acepta letras y espacios en blanco",
  lastName: "El campo 'apellido' solo acepta letras y espacios en blanco.",
  email:
    "El campo 'correo electrónico' no es válido, debe contener letras,'@' y '.' ",
  telephone: "El campo 'teléfono' debe contener números.",
  message: "El campo 'mensaje' tiene un máximo de 255 caracteres."
}

export const REQUIRED = {
  fistName: "El campo 'nombre' es requerido.",
  lastName: "El campo 'apellido' es requerido.",
  email: "El campo 'correo electrónico' es requerido",
  telephone: "El campo 'teléfono' es requerido.",
  message: "El campo 'mensaje' es requerido",
  subject: "El campo 'asunto' es requerido."
}

/****** Home - Hero Search ******/
// Seleccione una opción
export const HOME_LABELS = [
  {
    value: 'venta',
    label: 'Venta'
  },
  {
    value: 'alquiler',
    label: 'Alquiler'
  },
  {
    value: 'alquiler-temporal',
    label: 'Alquiler Temporal'
  }
]
// tipo de vivienda
export const HOUSING_TYPES = [
  {
    id: 'MLA1466',
    name: 'Casas'
  },
  {
    id: 'MLA1472',
    name: 'Departamentos'
  },
  {
    id: 'MLA105179',
    name: 'PH'
  },
  {
    id: 'MLA50547',
    name: 'Quintas'
  }
]
// Ubicación