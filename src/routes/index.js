import { Header } from '../templates';
import { Home, Character, Error404 } from '../pages';
import { getHash, resolveRoutes } from '../utils';

const routes = {
  '/': Home,
  '/:id': Character,
  '/contact': 'Contact',
};

const router = async () => {
  const header = null || document.getElementById('Header');
  const content = null || document.getElementById('content');

  let hash = getHash();
  let route = await resolveRoutes(hash);
  let render = routes[route] ? routes[route] : Error404;

  header.innerHTML = await Header();
  content.innerHTML = await render();
};

export default router;
