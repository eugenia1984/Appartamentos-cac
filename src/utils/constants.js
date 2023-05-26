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
    id: 'MLA1466',
    type: 'casas',
    alquiler: 'MLA1467',
    alquiler_temporario: 'MLA50278',
    venta: 'MLA1468',
    options: ['MLA1467', 'MLA50278', 'MLA1468']

  },
  {
    id: 'MLA1472',
    type: 'departamentos',
    alquiler: 'MLA1473',
    alquiler_temporario: 'MLA50279',
    venta: 'MLA1474',
    options: ['MLA1473', 'MLA50279', 'MLA1474']

  },
  {
    id: 'MLA105179',
    type: 'PH',
    alquiler: 'MLA105181',
    alquiler_temporario: 'MLA105180',
    venta: 'MLA105182',
    options: ['MLA105181', 'MLA105180','MLA105182']

  },
  {
    id: 'MLA5054',
    type: 'quintas',
    alquiler: 'MLA50549',
    alquiler_temporario: 'MLA52745',
    venta: 'MLA50551',
    options: ['MLA50549', 'MLA52745', 'MLA50551']

  },

  {
    value: 'venta',
    label: 'Venta'
  },

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