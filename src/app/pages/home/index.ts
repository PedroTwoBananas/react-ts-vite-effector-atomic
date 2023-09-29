import { Layout } from '../../components/layout/Layout';
import { routes } from '../../routing';
import { Home } from './Home';

export const HomeView = {
  route: routes.home,
  view: Home,
  layout: Layout
};