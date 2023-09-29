import { Layout } from '../../components/layout/Layout';
import { routes } from '../../routing';
import { Todo } from './Todo';

export const TodoView = {
  route: routes.todo,
  view: Todo,
  layout: Layout
};