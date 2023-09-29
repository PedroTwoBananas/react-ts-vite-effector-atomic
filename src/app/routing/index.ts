import { createHistoryRouter, createRoute } from 'atomic-router';
import { createBrowserHistory } from 'history';

export const routes = {
  home: createRoute(),
  todo: createRoute()
};

export const Router = createHistoryRouter({
  routes: [
    { path: '/', route: routes.home },
    { path: '/todo', route: routes.todo }
  ]
});

const history = createBrowserHistory();
Router.setHistory(history);