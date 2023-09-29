import React from 'react';
import { RouterProvider } from 'atomic-router-react';
import { Router } from './app/routing';
import { PagesView } from './Pages';

const App: React.FC = () => <><RouterProvider router={Router}><PagesView/></RouterProvider></>;

export default App;
