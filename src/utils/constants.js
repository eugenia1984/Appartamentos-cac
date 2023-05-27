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
  }
]

// Seleccione una opción
export const HOME_LABELS = [
  {
    id: 'MLA1466',
    type: 'casas',
    options: [
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
    ]  
  },
  {
    id: 'MLA1472',
    type: 'departamentos',
    options: [
      {
        id: 'MLA1473',
        type: 'Alquiler'
      },
      {
        id: 'MLA50279',
        type: 'Alquiler temporario'
      },
      {
        id: 'MLA1474',
        type: 'Venta'
      }
    ]
  },
  {
    id: 'MLA105179',
    type: 'PH',
    options: [
      {
        id: 'MLA105181',
        type: 'Alquiler'
      },
      {
        id: 'MLA105180',
        type: 'Alquiler temporario'
      },
      {
        id: 'MLA105182',
        type: 'Venta'
      }
    ]
  }
]


