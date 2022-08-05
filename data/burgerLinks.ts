import { IBurgerLink } from './../src/interfaces/IBurgerLink';

// Datas to map in the navbar
const burgerLinks: IBurgerLink[] = [
  {
    id: 1,
    path: '/',
    title: 'Accueil',
  },
  {
    id: 2,
    path: '/collection',
    title: 'Nos sacs',
  },
  {
    id: 3,
    path: '/univers',
    title: 'Univers Brille',
  },
  {
    id: 4,
    path: '/contact',
    title: 'Contact',
  },
  {
    id: 5,
    path: '/compte',
    title: 'Compte',
  },
];

export default burgerLinks;
