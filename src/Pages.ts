import { createRoutesView } from 'atomic-router-react';
import { HomeView } from './app/pages/home';
import { TodoView } from './app/pages/todo';

export const PagesView = createRoutesView({
  routes: [
    HomeView,
    TodoView
  ]
});