export const publicRoutes = {
  HOME: '/',
  ABOUT_US: '/nosotros',
  CONTACT: '/contacto',
  DETAIL_WITH_ID: '/detalle/',
  LOGIN: '/login',
  REGISTER: '/registro',
  SEARCH: '/propiedades',
  TERMS_CONDITIONS: '/terminos-condiciones'
}

export const privateRoutes = {
  FAVORITES: '/favoritos'
}

export const PAGES_LINK_MENU = [
  {
    to: `${publicRoutes.HOME}`,
    text: 'Propiedades'
  },
  {
    to: `${publicRoutes.ABOUT_US}`,
    text: 'Quienes somos'
  },
  {
    to: `${publicRoutes.CONTACT}`,
    text: 'Contacto'
  }
]

export const LOGIN_LINK_MENU = [
  { to: `${privateRoutes.FAVORITES}`, text: 'Favoritos' },
  { to: '/', text: 'Cerrar sesión' }
]
