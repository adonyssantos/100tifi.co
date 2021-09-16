import { Header } from '../templates';
import { Home, Character, Error404 } from '../pages';
import { getHash, resolveRoutes } from '../utils';

const routes = {
  '/': Home,
  '/character/:id': Character,
  '/contact': 'Contact',
};

const router = async () => {
  const header = null || document.getElementById('Header');
  const content = null || document.getElementById('content');

  let characterHash = getHash('/character');
  let route = await resolveRoutes(characterHash);
  let render = routes[route] ? routes[route] : Error404;

  header.innerHTML = await Header();
  content.innerHTML = await render();
};

export default router;
